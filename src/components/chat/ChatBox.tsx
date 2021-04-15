import React from 'react'
import { useStyletron } from 'baseui'
import { fdb, useAuth } from '../../hooks/use-auth'
import {
  useNewOrGetIdConversationMutation,
} from '../../graphql/autogenerate/hooks'
import { Avatar } from 'baseui/avatar'
import { useNavigate } from 'react-router-dom'

const ChatBox: React.FC<{ participant: any }> = ({ participant }: any) => {
  const history = useNavigate()
  const { state }: any = useAuth()
  const [, theme] = useStyletron()

  const [newOrGetIdConver] = useNewOrGetIdConversationMutation()

  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

  const handleGetOrAddIdConversation = async () => {
    try {
      const res = await newOrGetIdConver({
        variables: {
          object: {
            // participantsId: project.clientOwner.userInfo.id,
            participants: [userId, participant.id],
          },
        },
      })
      const idConversation = res.data?.insert_conversations?.returning[0].id

      const isExistConverById = await fdb
        .collection(`messages`)
        .doc(idConversation)
        .get()

      // console.log(isExistConverById.exists)
      if (isExistConverById.exists) {
        history(`/chat/p/${idConversation}`)
      } else {
        await fdb
          .collection(`messages`)
          .doc(idConversation)
          .set({
            id: idConversation,
            create: new Date().toISOString(),
            lastMsg: '',
            [userId]: { lastReadMsg: new Date().toISOString() },
            [participant.id]: {
              lastReadMsg: new Date().toISOString(),
            },
            participants: {
              [participant.id]: true,
              [userId]: true,
            },
            members: [
              {
                id: participant?.id,
                name: participant?.fullName,
                photoUrl: 'http://www.example.com/12345678/photo.png',
              },
              {
                id: userId,
                name: state.user.displayName,
                photoUrl: state.user.photoURL,
              },
            ],
          })

        history(`/chat/p/${idConversation}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingRight: theme.sizing.scale800,
        borderBottom: `1px solid ${theme.colors.mono400}`,
      }}
      onClick={handleGetOrAddIdConversation}
    >
      <Avatar
        name={participant?.fullName}
        size={'2em'}
        src={''}
      />
      <div
        style={{
          ...theme.typography.font200,
          paddingLeft: '12px',
        }}
      >
        {participant?.fullName}
      </div>
    </div>
  )
}

export default ChatBox
