import React, { lazy, Suspense } from 'react'
import { useStyletron } from 'baseui'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const ChatWindow = lazy(() => import('./ChatWindow'))

export const ChatDMView = () => {
  const [, theme] = useStyletron()
  const { id } = useParams()

  return (
    <Suspense fallback={<CircularProgress color="inherit"/>}>
      <div
        style={{[theme.mediaQuery.small]: {
          display: 'block',
          backgroundColor: 'mono200',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        [theme.mediaQuery.medium]: {
          display: 'flex',
          backgroundColor: 'mono200',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        [theme.mediaQuery.large]: {
          display: 'flex',
          backgroundColor: 'mono200',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },}}

      >
        <ChatWindow id={id} />
      </div>
      </Suspense>
  )
}
