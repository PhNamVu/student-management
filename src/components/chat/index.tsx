import React from 'react'

import { useStyletron } from 'baseui'
import { Outlet } from 'react-router-dom'
import { ChatProvider } from './ChatContext'
import { ChatSidebar } from './ChatSideBar'

export const ChatIndex = () => {
  const [css, theme] = useStyletron()

  return (
    <ChatProvider>
      <div
        className={css({
          [theme.mediaQuery.small]: {
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            backgroundColor: 'white',
          },
          [theme.mediaQuery.medium]: {
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            backgroundColor: 'white',
          },
          [theme.mediaQuery.large]: {
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            backgroundColor: 'white',
            height: '100%',
          },
        })}
      >
        <ChatSidebar />
        <Outlet />
      </div>
    </ChatProvider>
  )
}
