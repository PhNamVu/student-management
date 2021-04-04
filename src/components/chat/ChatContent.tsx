import React from 'react'
import { StyledSpinnerNext } from 'baseui/spinner'
import { useStyletron } from 'baseui'

import MessagesList from './MessageList'
import { useCountMessageQuery } from '../../graphql/autogenerate/hooks'


const ChatContent: React.FC<{ id: string }> = ({ id } : any) => {
  const [css, theme] = useStyletron()
  const { data, loading, error } = useCountMessageQuery({
    variables: {
      id,
    },
  })
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

  if (error) return <div>Not found ID</div>
  return (
    <MessagesList
      id={id}
      numMsgCount={data?.messages_aggregate?.aggregate?.count}
    />
  )
}

export default ChatContent


