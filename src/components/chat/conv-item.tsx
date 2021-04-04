import * as React from 'react'
import { useStyletron } from 'baseui'
import { Avatar } from 'baseui/avatar'
import { NavLink } from 'react-router-dom'

import { useAuth } from '../../hooks/use-auth'

import { Spinner } from 'reactstrap'
import { formatDateHourChat } from '../../helper/format-date'
import { useMembersChatInfoByIdsQuery } from '../../graphql/autogenerate/hooks'


const ConvItem: React.FC<{ conv: any } > = ({ conv } : any) => {
  const [css, theme] = useStyletron()
  const {
    state: { user },
  }: any = useAuth()
  const userId = user.uid

  const { data, loading } = useMembersChatInfoByIdsQuery({
    variables: {
      userId1: conv.members[0].id,
      userId2: conv.members[1].id,
    },
  })
  if (loading) {
    return <Spinner />
  }

  const membersChatInfo = data?.users

  return (
    <NavLink
      to={`/chat/p/${conv.id}`}
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.sizing.scale500,
        paddingBottom: theme.sizing.scale500,
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        borderBottom: `1px solid ${theme.colors.mono400}`,
        color: '#444444',
        textDecoration: 'none',

        ':hover': {
          backgroundColor: theme.colors.mono300,
        },
      })}
      activeClassName={css({
        backgroundColor: theme.colors.mono200,
      })}
    >
      {membersChatInfo !== undefined && membersChatInfo[0].id === userId && (
        <div
          className={css({
            position: 'relative',
          })}
        >
          <Avatar
            name={
              membersChatInfo[1]?.fullName !== null &&
              membersChatInfo[1]?.fullName !== undefined
                ? membersChatInfo[1].fullName
                : ''
            }
            size={'48px'}
            src={''}
            overrides={{
              Avatar: {
                style: {
                  // borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: '#456aef',
                  boxShadow: '0 3px 2px -2px rgba(0,0,0,.1)',
                },
              },
            }}
          />
        </div>
      )}

      {membersChatInfo && membersChatInfo[0].id !== userId && (
        <div
          className={css({
            position: 'relative',
          })}
        >
          <Avatar
            name={
              membersChatInfo[0]?.fullName !== null &&
              membersChatInfo[0]?.fullName !== undefined
                ? membersChatInfo[0].fullName
                : ''
            }
            size={'48px'}
            src={''}
            overrides={{
              Avatar: {
                style: {
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: '#456aef',
                  boxShadow: '0 3px 2px -2px rgba(0,0,0,.1)',
                },
              },
            }}
          />
        </div>
      )}

      <div
        className={css({
          width: '80%',
          marginLeft: theme.sizing.scale400,
        })}
      >
        {membersChatInfo && membersChatInfo[0].id === userId && (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width:'100%'

            })}
          >
            <div className={css({ ...theme.typography.font250 })}>
              {membersChatInfo[1]?.fullName !== null &&
              membersChatInfo[1]?.fullName !== undefined
                ? membersChatInfo[1]?.fullName
                : ''}
            </div>

            <span
              className={css({
                ...theme.typography.font200,
                color: theme.colors.mono700,
                fontSize: '10px',
              })}
            >
              {formatDateHourChat(conv.create)}
            </span>
          </div>
        )}

        {membersChatInfo && membersChatInfo[0].id !== userId && (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width:'100%'
            })}
          >
            <div className={css({ ...theme.typography.font250 })}>
              {membersChatInfo[0].fullName !== null &&
              membersChatInfo[0].fullName !== undefined
                ? membersChatInfo[0]?.fullName
                : ''}
            </div>
            <span
              className={css({
                ...theme.typography.font200,
                color: theme.colors.mono700,
                fontSize: '10px',
              })}
            >
              {formatDateHourChat(conv.create)}
            </span>
          </div>
        )}

        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: theme.sizing.scale100,
          })}
        >
          <div
            className={css({
              ...theme.typography.font200,
              color: theme.colors.colorSecondary,
              overflow: 'hidden',
              fontWeight:
                conv[userId].lastReadMsg < conv.create ? 'bold' : 'normal',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: '14px',
              maxWidth:'85%'
            })}
          >
            {conv.lastMsg}
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ConvItem
