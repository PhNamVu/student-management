import * as React from 'react'
import { useStyletron } from 'baseui'
import TextareaAutosize from 'react-textarea-autosize'
import { useState } from 'react'
import { Paperclip, AlertTriangle } from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import nanoid from 'nanoid'
import { Tag } from 'baseui/tag'
import { Spinner } from 'baseui/spinner'
import { useImmer } from 'use-immer'
import { useAuth, fdb, storage } from '../../hooks/use-auth'
import { useChatState } from './ChatContext'
import { Button } from 'reactstrap'



const ChatInput: React.FC<{ id: string; onSendMessage: any }> = ({
  id,
  onSendMessage,
} : any) => {
  const [css, theme] = useStyletron()
  const [files, setFiles] = useImmer([])

  const [focusStyle, setFocusStyle] = useState(false)
  const { setHeightInput }: any = useChatState()
  const {
    state: { user },
  }: any = useAuth()
  const userId = user.uid

  const [msg, setMsg] = useState('')

  const onChange = ({ target }: any) => {
    setMsg(target.value)
  }

  const sendMessages = (e: any) => {
    e.preventDefault()
    if (msg.trim() === '') return
    setMsg('')
    setFiles(() => [])
    const date = new Date().toISOString()

    if (typeof onSendMessage === 'function') {
      onSendMessage({
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        type: 'TEXT',
        text: msg,
        attachments:
          files.length > 0
            ? files.map((item: any) => ({
                id: item.id,
                uid: user.uid,
                size: item.size,
                contentType: item.type,
                name: item.name,
                assetUrl: item.assetUrl,
              }))
            : null,
        conv_id: id,
        sender_user_id: userId,
      })
      fdb
        .collection('messages')
        .doc(id)
        .update({
          lastMsg: msg,
          create: date,
          [userId]: { lastReadMsg: new Date().toISOString() },
        })
    }
  }

  const handleSendMessageOnEnter = (e: any) => {
    if (msg.trim() === '') return
    if (e.key === 'Enter' && !e.shiftKey && e.target.value && msg !== '') {
      sendMessages(e)
    }
  }

  const handleCancelUploadFileById = (item: any) => {
    // cancel upload
    item.uploadTaskRef.cancel()

    // remove files
    setFiles((draft: any) => {
      draft.splice(
        draft.findIndex((x: any) => x.id === item.id),
        1
      )
    })
  }

  const onFileChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i]
      const fileId = nanoid()
      const uploadTaskRef = storage
        .ref()
        .child(`/chats/${id}/users/${user.uid}/${fileId}-${file.name}`)
        .put(file)

      setFiles((draft: any) => {
        draft.push({
          id: fileId,
          name: file.name,
          type: file.type,
          size: file.size,
          uploadTaskRef,
          status: 'loading',
          assetUrl: '',
        })
      })

      uploadTaskRef.on(
        'state_changed',
        function () {},
        function () {
          setFiles((draft: any) => {
            const i = draft.findIndex((x: any) => x.id === fileId)
            if (i !== -1) {
              draft[i].status = 'error'
            }
          })
        },
        async function () {
          const getDownloadLink = await uploadTaskRef.snapshot.ref.getDownloadURL()

          setFiles((draft: any) => {
            const i = draft.findIndex((x: any) => x.id === fileId)
            if (i !== -1) {
              draft[i].status = 'success'
              draft[i].assetUrl = getDownloadLink
            }
          })
        }
      )
    }
  }

  const submitMessage = (e: any) => {
    sendMessages(e)
  }

  return (
    <div
      className={css({
        backgroundColor: 'white',
        display: 'flex',
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale400,
        paddingRight: theme.sizing.scale800,
        borderTop: `1px solid ${theme.colors.mono300}`,
        bottom: 0,
        position: 'sticky',
      })}
    >
      <div
        className={css({
          marginRight: theme.sizing.scale300,
          alignSelf: 'flex-end',
          paddingBottom: '10px',
        })}
      >
        <label htmlFor="upload-button">
          <Paperclip
            size="2.2em"
            style={{
              padding: theme.sizing.scale200,
              color: '#737376',
              cursor: 'pointer',
            }}
          />
        </label>
        <input
          multiple
          type="file"
          id="upload-button"
          onChange={onFileChange}
          hidden
        />
      </div>
      <div className={css({ width: '100%', position: 'relative' })}>
        <TextareaAutosize
          autoFocus
          // minRows={2}
          maxRows={20}
          onHeightChange={(height) => setHeightInput(height)}
          placeholder="Type a new message"
          value={msg}
          onChange={onChange}
          // onKeyPress={onKeyPress}
          onKeyDown={handleSendMessageOnEnter}
          onFocus={(e) => {
            setFocusStyle(true)
            // update last read conversation
            e.preventDefault()
            fdb
              .collection('messages')
              .doc(id)
              .update({
                [userId]: { lastReadMsg: new Date().toISOString() },
              })
          }}
          onBlur={(e) => {
            setFocusStyle(false)
            // update last read conversation
            e.preventDefault()
            fdb
              .collection('messages')
              .doc(id)
              .update({
                [userId]: { lastReadMsg: new Date().toISOString() },
              })
          }}
          className={css({
            ...theme.typography.font300,
            width: '100%',
            height: 'auto',
            borderRadius: '24px',
            outline: 'none',
            border: !focusStyle
              ? `1px solid ${theme.colors.mono400}`
              : `1px solid #456aef`,
            backgroundColor: '#fafafa',
            cursor: 'text',
            paddingLeft: theme.sizing.scale600,
            paddingRight: theme.sizing.scale600,
            paddingTop: '10px',
            paddingBottom: files.length > 0 ? '50px' : '10px',
            lineHeight: '20px',
            boxSizing: 'border-box',
            resize: 'none',
          })}
        />
        {files.length > 0 && (
          <div
            className={css({
              paddingLeft: theme.sizing.scale400,
              position: 'absolute',
              display: 'flex',
              flexWrap: 'nowrap',
              overflow: 'auto',
              width: '100%',
              bottom: '8px',
            })}
          >
            {files.map((item: any) => (
              <Tag
                key={item.id}
                kind="accent"
                variant="outlined"
                onActionClick={() => {
                  handleCancelUploadFileById(item)
                }}
              >
                {item.status === 'loading' && (
                  <>
                    <Spinner size="10px" />
                  </>
                )}{' '}
                {item.status === 'error' && (
                  <>
                    <AlertTriangle color={theme.colors.negative} size="10px" />
                  </>
                )}
                {item.name}
              </Tag>
            ))}
          </div>
        )}
      </div>

      <div 
        className={css({ 
          alignSelf: 'flex-end', 
          paddingBottom: '10px',
        })}
      >
        <Button
          disabled={
            msg.trim() === '' ||
            files.filter((item: any) => item.status === 'loading').length > 0 ||
            files.filter((item: any) => item.status === 'error').length > 0
              ? true
              : false
          }
          onClick={submitMessage}
          color="primary"
          // size="compact"
          // shape="pill"
        >
          SEND
        </Button>
      </div>
    </div>
  )
}

export default ChatInput
