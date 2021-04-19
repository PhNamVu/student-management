import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useStyletron } from 'baseui'
import { UploadCloud, AlertTriangle, X } from 'react-feather'
import { StyledSpinnerNext } from 'baseui/spinner'
import { useImmer } from 'use-immer'

import { Button } from 'baseui/button'
import { storage } from '../hooks/use-auth'
import nanoid from 'nanoid'

const StatusFileItem = ({ status, type }: any) => {

  const [, theme] = useStyletron()

  const isType: any = {
    'application/msword': '/assets/static/icon/doc_type.png',
    'image/jpg': '/assets/static/icon/jpg_type.png',
    'image/png': '/assets/static/icon/png_type.png',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      '/assets/static/icon/docx_type.png',
    'application/pdf': '/assets/static/icon/pdf_type.png',
    'image/bmp': '/assets/static/icon/bmp_type.png',
    'image/gif': '/assets/static/icon/gif_type.png',
    'image/jpeg': '/assets/static/icon/jpg_type.png',
    'application/vnd.ms-excel': '/assets/static/icon/xls_type.png',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      '/assets/static/icon/xlsx_type.png',
    'text/plain': '/assets/static/icon/txt_type.png',
    'application/vnd.ms-powerpoint': '/assets/static/icon/ppt_type.png',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      '/assets/static/icon/pptx_type.png',
    default: '/assets/static/icon/general_type.png',
  }

  switch (status) {
    case 'loading':
      return <StyledSpinnerNext size="18px" />
    case 'error':
      return <AlertTriangle color={theme.colors.negative} size="18px" />
    case 'success':
      return (
        <img
          src={
            type.includes('video')
              ? '/assets/static/icon/video_type.png'
              : isType[type]
          }
          alt="icon-types"
          width="25px"
        />
      )

    default:
      return (
        <img
          src={
            type.includes('video')
              ? '/assets/static/icon/video_type.png'
              : isType[type]
          }
          alt="icon-types"
          width="25px"
        />
      )
  }
}

export const Uploader = ({
  initFiles = [],
  refStorage,
  onChange,
  acceptedFileExtensions,
  maxSizeFile = 20,
  setSubmitting = () => {},
}: any) => {
  const [css, theme] = useStyletron()
  const [files, setFiles] = useImmer(initFiles)

  const handleCancelUploadFileById = (item: any) => {
    // cancel upload
    if (item.uploadTaskRef) {
      item.uploadTaskRef.cancel()
    }
    // Delete file on Firebase education attachments
    const desertRef = storage
      .ref()
      .child(`/${refStorage}/${item.id}-${item.name}`)

    setFiles((draft: any) => {
      draft.splice(
        draft.findIndex((x: any) => x.id === item.id),
        1
      )

      desertRef
        .delete()
        .then(function () {
          console.log('successfully deleted file on firebase')
        })
        .catch(function (error: Error) {
          console.log('error delete file', error)
        })
    })
  }

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: acceptedFileExtensions,
    maxSize: maxSizeFile * 1000000,
    multiple: true,
    onDrop: useCallback(
      (acceptedFiles) => {
        acceptedFiles.forEach((file: any) => {
          setSubmitting(true)
          const fileId = nanoid()
          const uploadTaskRef = storage
            .ref()
            .child(`/${refStorage}/${fileId}-${file.name}`)
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
              setFiles((draft) => {
                const i = draft.findIndex((x: any) => x.id === fileId)
                if (i !== -1) {
                  draft[i].status = 'error'
                }
              })
            },
            async function () {
              const getDownloadLink = await uploadTaskRef.snapshot.ref.getDownloadURL()

              setFiles((draft) => {
                const i = draft.findIndex((x: any) => x.id === fileId)
                if (i !== -1) {
                  draft[i].status = 'success'
                  draft[i].assetUrl = getDownloadLink
                }
              })
              setSubmitting(false)
            }
          )
        })
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [onChange]
    ),
  })

  useEffect(() => {
    onChange(files)
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const fileRejectionItems = fileRejections.map(({ file, errors }, index) => (
    <ul key={index}>
      <li key={index}>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>
              <span
                className={css({
                  ...theme.typography.font250,
                  color: theme.colors.negative500,
                })}
              >
                {`${
                  e.code === 'file-too-large'
                    ? `File uploads cannot exceed ${maxSizeFile} MB`
                    : e.message
                } (${file.name})`}
              </span>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  ))

  return (
    <div
      className={css({
        marginTop: theme.sizing.scale300,
        marginBottom: theme.sizing.scale300,
      })}
    >
      <div
        {...getRootProps()}
        className={css({
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.sizing.scale600,
          borderWidth: '2px',
          borderRadius: theme.sizing.scale200,
          borderColor: theme.colors.mono400,
          borderStyle: 'dashed',
          backgroundColor: theme.colors.mono200,
          color: theme.colors.mono800,
          outline: 'none',
          transition: 'border 0.24s ease-in-out',
          cursor: 'pointer',
          marginTop: theme.sizing.scale300,
          marginBottom: theme.sizing.scale300,
        })}
      >
        <input {...getInputProps()} />
        <UploadCloud />
        <span
          className={css({
            ...theme.typography.font200,
            color: theme.colors.mono900,
            marginTop: theme.sizing.scale400,
            textAlign: 'center',
          })}
        >
          <span
            className={css({
              color: theme.colors.primary,
              fontWeight: 500,
            })}
          >
            Drag/Upload
          </span>{' '}
          your file here (Max size: {maxSizeFile} MB).
        </span>
      </div>

      <div>
        {files.length > 0 &&
          files.map((file: any, i: number) => (
            <div
              key={i}
              className={css({
                backgroundColor: theme.colors.white,

                borderTop: `1px solid ${theme.colors.mono400}`,
                borderLeft: `1px solid ${theme.colors.mono400}`,
                borderRight: `1px solid ${theme.colors.mono400}`,
                padding: `${theme.sizing.scale200} ${theme.sizing.scale400}`,

                ':first-child': {
                  borderTopLeftRadius: theme.sizing.scale300,
                  borderTopRightRadius: theme.sizing.scale300,
                },
                ':last-child': {
                  borderBottom: `1px solid ${theme.colors.mono400}`,
                  borderBottomLeftRadius: theme.sizing.scale300,
                  borderBottomRightRadius: theme.sizing.scale300,
                },
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center' })}>
                  <StatusFileItem status={file.status} type={file.type} />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={file.assetUrl}
                    className={css({
                      ...theme.typography.font200,
                      color: theme.colors.accent,
                      paddingLeft: theme.sizing.scale300,
                    })}
                  >
                    {file.name}
                  </a>
                </div>
                <div>
                  {file.status === 'loading' ? null : (
                    <Button
                      type="button"
                      size="mini"
                      kind="minimal"
                      shape="round"
                      onClick={() => handleCancelUploadFileById(file)}
                    >
                      <X size={18} color={theme.colors.mono600} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {fileRejectionItems}
    </div>
  )
}
