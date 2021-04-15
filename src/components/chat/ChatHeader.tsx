import * as React from 'react'
import { useStyletron } from 'baseui'

import { Skeleton } from 'baseui/skeleton'
import HeaderNotMine from './HeaderNotMine'

const ChatHeader: React.FC<{ conv: string }> = ({ conv }: any) => {
  const [, theme] = useStyletron()

  return (
    <div
      style={{
        [theme.mediaQuery.small]: {
          paddingTop: theme.sizing.scale300,
          paddingBottom: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale400,
          paddingRight: theme.sizing.scale400,
        },
        [theme.mediaQuery.medium]: {
          paddingTop: theme.sizing.scale300,
          paddingBottom: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale400,
          paddingRight: theme.sizing.scale400,
        },
        [theme.mediaQuery.large]: {
          paddingTop: theme.sizing.scale600,
          paddingBottom: theme.sizing.scale500,
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale800,
        },

        boxShadow: '0 3px 2px -2px rgba(0,0,0,.1)',
      }}
    >
      {conv === null ? (
        <Skeleton />
      ) : (
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HeaderNotMine conv={conv} />
        </div>
      )}
      <div></div>
    </div>
  )
}

export default ChatHeader
