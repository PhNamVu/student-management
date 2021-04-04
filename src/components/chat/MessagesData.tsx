import React from 'react'
import { useRef, useEffect } from 'react'

import { useStyletron } from 'baseui'
import {LeftSenderMessage} from './LeftSenderMessage'


import MineSenderMessage from './MineSenderMessage'
import { Button } from 'baseui/button'

import { useChatState } from './ChatContext'
import { useAuth } from '../../hooks/use-auth'

const renderMessage = (showName = true, message: any, userId: any) => {
  // <Message showName={showName} name={name} body={body}/>
  if (message.sender?.id !== userId) {
    return (
      <LeftSenderMessage
        key={message.id}
        messages={message}
        showName={showName}
      />
    )
  } else {
    return (
      <MineSenderMessage
        key={message.id}
        messages={message}
        showName={showName}
      />
    )
  }
}

const renderMessagesGroup = (messages: any[], userId: any) => {
  const lastIndex = messages.length - 1
  return messages.map(
    (message: { sender: { fullName: any } }, i: number) => {
      let showName = false
      if (i === lastIndex) {
        showName = true
      } else {
        const nextName = messages[i + 1].sender.fullName
        if (message.sender.fullName !== nextName) {
          showName = true
        }
      }
      return renderMessage(showName, message, userId)
    }
  )
}

const MessagesData: React.FC<{
  data: any
  numMsgCount: number
  subscribeToNewMessage: any
  onLoadMore: any
}> = ({ data, numMsgCount, subscribeToNewMessage, onLoadMore } : any) => {
  const [css, theme] = useStyletron()
  const msgsRef = useRef<any>(null)
  const msgScroll = useRef<any>(null)

  const [goingBottom, setGoingBottom] = React.useState(true)
  const {
    state: { heightInput },
  }: any = useChatState()

  const { state }: any = useAuth()
  const userId =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

  useEffect(() => {
    const unsubscribe = subscribeToNewMessage()
    return () => {
      typeof unsubscribe === 'function' && unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleScroll = (e: any) => {
    // console.log('scrollPosition', scrollPosition)
    setGoingBottom(
      e.target.scrollHeight - e.target.clientHeight === e.target.scrollTop
    )
  }

  useEffect(() => {
    const scrollToBottom = () => {
      msgScroll.current.scrollIntoView()
    }

    if (goingBottom) {
      scrollToBottom()
    }
  }, [data.length, goingBottom, heightInput])
  console.log('messageData', data)
  return (
    <div
      ref={msgsRef}
      onScroll={handleScroll}
      className={css({
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: theme.sizing.scale800,
        paddingRight: theme.sizing.scale800,
        overflow: 'hidden scroll',
        boxShadow: '0 3px 2px -2px rgba(0, 0, 0, 0.1)',
        height: `calc((100vh - 99px) - ${heightInput}px)`,
      })}
    >
      {/* show fetchmore button */}
      {numMsgCount > 50 && (
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Button
            size="mini"
            kind="secondary"
            shape="pill"
            onClick={onLoadMore}
            overrides={{
              BaseButton: {
                style: {
                  paddingLeft: theme.sizing.scale500,
                  paddingRight: theme.sizing.scale500,
                },
              },
            }}
          >
            Click to show more messages...
          </Button>
        </div>
      )}
      {renderMessagesGroup(data, userId)}

      <div ref={msgScroll}></div>
    </div>
  )
}

export default MessagesData
