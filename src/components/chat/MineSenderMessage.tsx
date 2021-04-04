import * as React from 'react'
import { useStyletron } from 'baseui'

import {AutoLink} from '../AutoLink'
import { Check, Paperclip } from 'react-feather'
import { Spinner } from 'baseui/spinner'
import {formatDateHourChatMessage} from '../../helper/format-date'

const MineSenderMessage: React.FC<{ messages: any; showName: boolean }> = ({
  messages,
  showName,
} : any ) => {
  const [css, theme] = useStyletron()

  return (
    <div className={css({ display: 'flex', flexDirection: 'column' })}>
      <div
        className={css({
          ...theme.typography.font300,
          whiteSpace: 'pre-line',
          alignSelf: 'flex-end',
          // [theme.mediaQuery.small]: {
          //   maxWidth: 'calc(100% - 20%)',
          // },
          // [theme.mediaQuery.medium]: {
          //   maxWidth: 'calc(100% - 40%)',
          // },
          // [theme.mediaQuery.large]: {
          //   maxWidth: 'calc(100% - 40%)',
          // },
          [theme.mediaQuery.small]: {
            maxWidth: 'calc(100vw - 20%)',
          },
          [theme.mediaQuery.medium]: {
            maxWidth: '40vw',
          },
          [theme.mediaQuery.large]: {
            maxWidth: '40vw',
          },
          // backgroundColor: '#456aef',
          backgroundColor: theme.colors.positive100,
          border: `1px solid ${theme.colors.positive200}`,
          color: theme.colors.mono1000,
          boxShadow: `1px 1px 1px rgba(0,0,0,.01)`,
          marginTop: theme.sizing.scale200,
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '12px',
          paddingRight: '12px',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '2px',
          borderBottomLeftRadius: '15px',
        })}
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
              <div className={css({ display: 'flex', alignItems: 'center' })}>
                <Paperclip size={16} color={theme.colors.mono800} />{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={file.assetUrl}
                  className={css({
                    paddingLeft: theme.sizing.scale300,
                    ...theme.typography.font200,
                    color: theme.colors.accent,
                  })}
                >
                  {file.name}
                </a>
              </div>
            </div>
          ))}
      </div>
      {showName && (
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-end',
          })}
        >
          <div
            className={css({
              ...theme.typography.font200,
              marginRight: theme.sizing.scale200,
              paddingTop: '5px',
            })}
          >
            {messages.isSent ? (
              <Check color={theme.colors.positive500} size={16} />
            ) : (
              <Spinner size={16} color={theme.colors.accent500} />
            )}
          </div>

          <time
            className={css({
              ...theme.typography.font200,
            })}
          >
            {formatDateHourChatMessage(messages.createdAt)}
          </time>
        </div>
      )}
    </div>
  )
}

export default MineSenderMessage
