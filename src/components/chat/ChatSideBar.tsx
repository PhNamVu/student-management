import React from 'react'
import { useStyletron } from 'baseui'

import ChatSidebarHeader from './Header'
import ChatList from './ChatList'
import useMediaQuery from '../../hooks/use-media-query'

export const ChatSidebar: React.FC<{}> = () => {
  const [css, theme] = useStyletron()
  const [isMobile, isTablet] = useMediaQuery()

  if (isTablet) return <ChatList />
  if (isMobile) return <ChatList />

  return (
    <div
      className={css({
        borderRight: `1px solid ${theme.colors.mono400}`,
        height: '100vh',
      })}
    >
      <ChatSidebarHeader />
      <ChatList />
    </div>
  )
}
