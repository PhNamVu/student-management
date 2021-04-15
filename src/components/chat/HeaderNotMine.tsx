import React from 'react'
import { useStyletron } from 'baseui'
import { Button } from 'baseui/button'
import { ArrowLeft } from 'react-feather'
import { useNavigate } from 'react-router-dom'

import { Paragraph3 } from 'baseui/typography'

import { useAuth } from '../../hooks/use-auth'
import TooltipStatus from '../ToolTipStatus'
import { Spinner } from 'baseui/spinner'
import { useMembersChatInfoByIdsQuery } from '../../graphql/autogenerate/hooks'

const HeaderNotMine: React.FC<{ conv: any }> = ({ conv }: any) => {
  const [css, theme] = useStyletron()
  const {
    state: { user },
  }: any = useAuth()
  const history = useNavigate()

  const { data, loading, error } = useMembersChatInfoByIdsQuery({
    variables: {
      userId1: conv.members[0].id,
      userId2: conv.members[1].id,
    },
  })

  const membersChatInfo = data?.users

  if (loading) return <Spinner />
  if (error)
    return (
      <Paragraph3
        overrides={{
          Block: {
            style: {
              textAlign: 'center',
            },
          },
        }}
      >
        Oops, there’s been an error. Please try refreshing the page.
      </Paragraph3>
    )

  return (
    <>
      {membersChatInfo && membersChatInfo[0].id === user?.uid && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              [theme.mediaQuery.small]: {
                display: 'block',
                marginRight: theme.sizing.scale400,
              },
              [theme.mediaQuery.medium]: {
                display: 'none',
                marginRight: 0,
              },
              [theme.mediaQuery.large]: {
                display: 'none',
                marginRight: 0,
              },
            }}
          >
            <Button
              size="mini"
              shape="round"
              kind="tertiary"
              onClick={() => history('/chat')}
            >
              <ArrowLeft size="20px" color={theme.colors.mono800} />
            </Button>
          </div>

          <div style={{ marginLeft: theme.sizing.scale400 }}>
            <div style={{ ...theme.typography.font350 }}>
              <div
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 500,
                }}
                className={css({
                  ':hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                {membersChatInfo && membersChatInfo[1]?.fullName}
              </div>
            </div>
          </div>
        </div>
      )}

      {membersChatInfo && membersChatInfo[0].id !== user.uid && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              [theme.mediaQuery.small]: {
                display: 'block',
                marginRight: theme.sizing.scale400,
              },
              [theme.mediaQuery.medium]: {
                display: 'none',
                marginRight: 0,
              },
              [theme.mediaQuery.large]: {
                display: 'none',
                marginRight: 0,
              },
            }}
          >
            <Button
              size="mini"
              shape="round"
              kind="tertiary"
              onClick={() => history(`/chat`)}
            >
              <ArrowLeft size="20px" color={theme.colors.mono800} />
            </Button>
          </div>

          <div className={css({ marginLeft: theme.sizing.scale400 })}>
            <div className={css({ ...theme.typography.font350 })}>
              <TooltipStatus
                content={
                  <div className={css({ ...theme.typography.font200 })}>
                    Active
                  </div>
                }
                label={
                  <span
                    style={{
                      content: '',
                      width: '6px',
                      height: '6px',
                      display: 'inline-block',
                      backgroundColor: theme.colors.positive500,
                      border: `2px solid ${theme.colors.positive500}`,
                      borderRadius: '50%',
                      transform: ' translateY(-1px)',
                      marginRight: theme.sizing.scale300,
                      verticalAlign: 'middle',
                    }}
                  />
                }
              />
              <div
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 500,
                }}
                className={css({
                  ':hover': {
                    textDecoration: 'underline',
                  },
                })}
              >
                {membersChatInfo && membersChatInfo[0].fullName}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderNotMine
