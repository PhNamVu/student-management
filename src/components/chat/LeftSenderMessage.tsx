import * as React from 'react'
import { useStyletron } from 'baseui'
import { Avatar } from 'baseui/avatar'

import { Paperclip } from 'react-feather'
import {AutoLink} from '../AutoLink'
import {formatDateHourChatMessage} from '../../helper/format-date'

export const LeftSenderMessage: React.FC<{ messages: any; showName: boolean }> = ({
  messages,
  showName,
} : any ) => {
  console.log('left sender message', messages)
  const [css, theme] = useStyletron()
  return (
    <div style={{ display: 'flex'}}>
      {showName && (
        <div
          style={{
            alignSelf: 'flex-end',
            marginRight: theme.sizing.scale400,
            marginBottom: '10px',
          }}
        >
          <Avatar
            name={messages?.sender?.fullName}
            size={'32px'}
            src={''}
          />
        </div>
      )}
      <div style={{maxWidth: '80%'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: theme.sizing.scale400,
          }}
        >
          <div
            style={{
              flex: 1,
              alignSelf: 'baseline',
              ...theme.typography.font300,
              [theme.mediaQuery.small]: {
                maxWidth: 'calc(100vw - 20%)',
              },
              [theme.mediaQuery.medium]: {
                maxWidth: '40vw',
              },
              [theme.mediaQuery.large]: {
                maxWidth: '40vw',
              },
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              marginLeft: !showName ? '42px' : 0,
              marginBottom: !showName ? '-10px' : 0,
              whiteSpace: 'pre-line',
              backgroundColor: theme.colors.mono200,
              border: `1px solid ${theme.colors.mono300}`,
              boxShadow: `1px 1px 1px rgba(0,0,0,.01)`,
              color: theme.colors.mono1000,
              marginTop: theme.sizing.scale200,
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              borderBottomLeftRadius: '2px',
              borderBottomRightRadius: '15px',
            }}
          >
            <AutoLink text={messages.text} />

            {messages.attachments &&
              messages.attachments.map((file: any) => (
                <div
                  key={file.id}
                  className={css({
                    ':first-child': { marginTop: theme.sizing.scale400 },
                    paddingBottom: theme.sizing.scale100,
                  })}
                >
                  <div
                    style={{display: 'flex', alignItems: 'center'}}
                  >
                    <Paperclip size={16} color={theme.colors.mono800} />{' '}
                    <a
                      style={{paddingLeft: theme.sizing.scale300,
                        ...theme.typography.font200,
                        color: theme.colors.accent,}}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={file.assetUrl}
                    >
                      {file.name}
                    </a>
                  </div>
                </div>
              ))}
          </div>
          {showName && (
            <time
              className={css({
                ...theme.typography.font200,
              })}
            >
              {formatDateHourChatMessage(messages.createdAt)}
            </time>
          )}
        </div>
      </div>
    </div>
  )
}




