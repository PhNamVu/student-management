import React from 'react'
import { useStyletron } from 'baseui'
import { StyledSpinnerNext } from 'baseui/spinner'


import ChatInput from './ChatInput'
import { useAuth } from '../../hooks/use-auth'
import MessagesData from './MessagesData'
import { LastMessageDocument, MessagesByConversationDocument, useAddMessageMutation, useMessagesByConversationQuery } from '../../graphql/autogenerate/hooks'

function isDuplicateDocument(newDocument: any, existingDocuments: any) {
  return (
    newDocument !== null &&
    existingDocuments.some((doc: any) => newDocument.id === doc.id)
  )
}

const MessagesList: React.FC<{ numMsgCount: any; id: string }> = ({
  numMsgCount,
  id,
} : any ) => {
  const [css, theme] = useStyletron()
  const [addMessage] = useAddMessageMutation()
  const { state }: any = useAuth()

  const userId =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

  const {
    data,
    loading,
    error,
    subscribeToMore,
    fetchMore,
  } = useMessagesByConversationQuery({
    variables: {
      id,
      offset: numMsgCount < 51 ? 0 : numMsgCount - 50,
      orderBy: [{ createdAt: 'desc' }] as any,
    },
  })
  console.log('conv_id', id, data, numMsgCount )
  const onSendMessage = React.useCallback(
    (object: any) => {
      
      addMessage({
        variables: { object },
        optimisticResponse: {
          insert_messages: {
            affected_rows: 1,
            __typename: 'messages_mutation_response',
            returning: [
              {
                id: object.id,
                sender: {
                  fullName: state.user.displayName,
                  id: userId,
                  __typename: 'users',
                },
                text: object.text,
                type: object.type,
                __typename: 'messages',
                attachments: object.attachments,
                createdAt: new Date().toISOString(),
                isSent: false,
              },
            ],
          },
        },
        update: (proxy: { readQuery: (arg0: { query: any; variables: { id: string; offset: number; orderBy: any } }) => any; writeQuery: (arg0: { query: any; variables: { id: string; offset: number; orderBy: any }; data: { messages: any[] } }) => void }, { data }: any) => {
          const dataMessages: any = proxy.readQuery({
            query: MessagesByConversationDocument,
            variables: {
              id,
              offset: numMsgCount < 51 ? 0 : numMsgCount - 50,
              orderBy: [{ createdAt: 'asc' }] as any,
            },
          })

          proxy.writeQuery({
            query: MessagesByConversationDocument,
            variables: {
              id,
              offset: numMsgCount < 51 ? 0 : numMsgCount - 50,
              orderBy: [{ createdAt: 'asc' }] as any,
            },
            data: {
              messages: [
                ...dataMessages.messages,
                data?.insert_messages?.returning[0],
              ],
            },
          })
        },
      })
    },
    [
      addMessage,
      id,
      numMsgCount,
      state.user.displayName,
      userId,
    ]
  )

  if (loading)
    return (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: theme.sizing.scale400,
          paddingBottom: theme.sizing.scale400,
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale800,
          overflow: 'hidden scroll',
          boxShadow: '0 3px 2px -2px rgba(0, 0, 0, 0.1)',
          height: `calc((100vh - 119px) - 62px)`,
        })}
      >
        <StyledSpinnerNext />
      </div>
    )

  if (error) {
    return <div>Not found error</div>
}

  const messages: any = data && data?.messages

  console.log('all messages by conver ', messages)

  return (
    <>
      <MessagesData
        data={messages}
        numMsgCount={numMsgCount}
        subscribeToNewMessage={() => {
          subscribeToMore({
            document: LastMessageDocument,
            variables: { id: id },
            updateQuery: (prev: { messages: any }, { subscriptionData }: any) => {
              if (!subscriptionData.data) return prev

              if (subscriptionData.data.messages.length === 0) return prev
              const newMessage = subscriptionData.data.messages[0]

              if (isDuplicateDocument(newMessage, prev.messages)) {
                return prev
              }

              return {
                ...prev,
                messages: [...prev.messages, newMessage],
              }
            },
          })
        }}
        onLoadMore={() => {
          fetchMore({
            query: MessagesByConversationDocument,
            variables: {
              id,
              // offset: numMsgCount - data.messages.length,
              orderBy: [{ createdAt: 'desc' }] as any,
              limit: 10,
              cursorMsgByCreatedAt: data?.messages[0].createdAt,
            },
            updateQuery: (prev: any, { fetchMoreResult }: any) => {
              if (!fetchMoreResult) return prev
              return Object.assign({}, prev, {
                messages: [
                  ...fetchMoreResult.messages.reverse(),
                  ...prev.messages,
                ],
              })
            },
          })
        }}
      />
      <ChatInput id={id} onSendMessage={onSendMessage} />
    </>
  )
}

export default MessagesList
