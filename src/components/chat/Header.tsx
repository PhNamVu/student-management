import React from 'react'
import { useStyletron } from 'baseui'
import ChatBox from './ChatBox'
import { useChatByFacultyQuery } from '../../graphql/autogenerate/hooks'
import { useAuth } from '../../hooks/use-auth'
import { StyledSpinnerNext } from 'baseui/spinner'

const ChatSidebarHeader: React.FC<{}> = () => {
  const [css, theme] = useStyletron()
  const { state }: any = useAuth()
  const roles: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-default-role'
    ]
  const facultyId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-faculty-id'
    ]
  const { data, loading, error } = useChatByFacultyQuery({
    variables: {
      where: {
        _and: [
          {
            roles: {
              _eq: roles === 'student' ? 'MCO' : 'STUDENT',
            },
          },
          {
            facultyId: {
              _eq: facultyId,
            },
          },
        ],
      },
    },
  })

  if (loading) return <StyledSpinnerNext />
  if (error) return <div>ChatSidebarHeader</div>
  const participants = data && data.users


  return (
    <div
      style={{flexDirection: 'column',
      display: 'flex',}}
    >
      <div
        style={{flexDirection: 'column',
        display: 'flex',
        borderTop: `1px solid ${theme.colors.mono400}`,
        paddingLeft: theme.sizing.scale800,
        paddingTop: theme.sizing.scale200,}}
      >
        <div className={css({ ...theme.typography.font250 })}>
          Your {roles === 'student' ? 'Coordinator' : 'Student'}
        </div>
        {participants?.map((participant: any) => (
          <ChatBox participant={participant} key={participant.id}/>
          // <p key={participant.id}>{participant.id}</p>
        ))}
      </div>
      <div
        style={{display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale800,
        paddingRight: theme.sizing.scale800,
        borderBottom: `1px solid ${theme.colors.mono400}`,}}
      >
        <div className={css({ ...theme.typography.font250 })}>Recent Chats</div>
      </div>
    </div>
  )
}

export default ChatSidebarHeader
