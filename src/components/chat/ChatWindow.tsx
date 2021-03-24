import React, { useEffect, useState } from 'react'
import { useStyletron } from 'baseui'

import ChatHeader from './ChatHeader'
import { fdb } from '../../hooks/use-auth'
import ChatContent from './ChatContent'

const ChatWindow: React.FC<{ id: string }> = ({ id } : any ) => {
  const [css, theme] = useStyletron()
  const [conv, setConv] = useState<any>(null)

  useEffect(() => {
    const getConvData = async () => {
      const getConv: any = await fdb.collection('messages').doc(id).get()
      setConv(getConv.data())
    }
    getConvData()

    return () => {
      // unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <div
        className={css({
          backgroundColor: theme.colors.mono100,
          width: '100%',
        })}
      >
        <ChatHeader conv={conv} />
        <ChatContent id={id} />
      </div>
    </>
  )
}

export default ChatWindow
