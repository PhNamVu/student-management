import * as React from 'react'
import { useStyletron } from 'baseui'
// import SimpleBar from 'simplebar-react'
// import 'simplebar/dist/simplebar.min.css'

import ConvItem from './conv-item'
import { StyledSpinnerNext } from 'baseui/spinner'
import { Paragraph3 } from 'baseui/typography'
import { MessageCircle } from 'react-feather'
import { fdb, useAuth } from '../../hooks/use-auth'


const ChatList: React.FC<{}> = () => {
  const [css, theme] = useStyletron()

  const [loading, setLoading] = React.useState(true)
  const [listConv, setListConv] = React.useState([])

  const {
    state: { user },
  }: any = useAuth()

  
  React.useEffect(() => {
    const uid = user.uid

    const unsubscribe = fdb
      .collection('messages')
      .where(`participants.${uid}`, '==', true)
      .onSnapshot(function (querySnapshot: any) {
        const convids: any = []
        querySnapshot.forEach(function (doc: any) {
          convids.push(doc.data())
        })
        setListConv(convids)
        setLoading(false)
      })

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={css({
        backgroundColor: theme.colors.white,
      })}
    >
      {loading && (
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            paddingTop: theme.sizing.scale1000,
            paddingBottom: theme.sizing.scale1000,
          })}
        >
          <StyledSpinnerNext $size="small" />
        </div>
      )}
      {!loading && listConv.length < 1 && (
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: '200px',
          })}
        >
          <div>
            <MessageCircle
              size={48}
              color={theme.colors.mono500}
              strokeWidth="1px"
            />
            <Paragraph3
              overrides={{
                Block: {
                  style: {
                    textAlign: 'center',
                  },
                },
              }}
            >
              No chats
            </Paragraph3>
          </div>
        </div>
      )}

      {!loading &&
        listConv.length > 0 &&
        listConv.map((conv: any) => (
          <>
            <ConvItem key={conv.id} conv={conv} />
          </>
        ))}
    </div>
    // </SimpleBar>
  )
}

export default ChatList


