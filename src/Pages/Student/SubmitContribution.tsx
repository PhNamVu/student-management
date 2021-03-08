import React, { useState } from 'react'
import {
  Container,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap'

import 'semantic-ui-css/semantic.min.css'
import { useParams } from 'react-router'
import { toaster } from 'baseui/toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { useAuth } from '../../hooks/use-auth'
import { useAddContributionMutation, useGetMagazineQuery } from '../../graphql/autogenerate/hooks'
import { Uploader } from '../../components/Uploader'
import { useStyletron } from 'baseui'
import { Checkbox } from 'baseui/checkbox'
import PrimaryButton from '../../components/shared/button/PrimaryBtn'
import { Backdrop, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core'
import { isBefore } from 'date-fns'


const loadingStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        },
    }),
);


export default function SubmitContributionPage() {
  const [css, theme] = useStyletron()
  const navigate = useNavigate()
  const { idMgz: magazineId } = useParams()
  const id = uuidv4()
  const customStyle = loadingStyles()
  const { state }: any = useAuth()

  const facultyId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-faculty-id'
    ]

  const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

  const [title, setTitle] = useState('')
  const [artical, setArtical] = useState([])
  const [image, setImage] = useState([])
  const [checked, setChecked] = useState(false)
  const [addContribution] = useAddContributionMutation()
  const { data, loading, error } = useGetMagazineQuery({
    fetchPolicy: 'network-only',
    variables: {
      where: {
        id: { _eq: magazineId },
      },
    },
  })
  const magazine = data && data?.magazines[0]

  if (error) return <div>Error at Edit Magazine component {error}</div>
  if (loading) return (
    <Backdrop className={customStyle.backdrop} open={loading}>
        <CircularProgress color="inherit"/>
    </Backdrop>
  )
  
  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      await addContribution({
        variables: {
          object: {
            magazineId,
            facultyId,
            ownerId: userId,
            id,
            title,
            artical,
            image,
          },
        },
      })
      toaster.positive('Add contribution successful', {
        autoHideDuration: 3000,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      toaster.negative('Add contribution fail', {
        autoHideDuration: 3000,
      })
    }
  }
  
  return (
    <Container>
      <h2 style={{ padding: '3rem 0', clear: 'both' }}>
        Submit Contribution
        { isBefore( new Date(magazine?.closureTemp), new Date()) &&
          <span style={{ color: 'red', fontSize: '60%', marginLeft: '1em' }}>
            (Close)
          </span>
        }
      </h2>
      
      <Form onSubmit={submitHandler}>
        <FormGroup row>
          <Label for="title" sm="2">
            Title *
          </Label>
          <Col lg="9" sm="10">
            <Input
              required
              value={title}
              name="name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="article" sm="2">
            Article *
          </Label>
          <Col lg="9" sm="10">
            <Uploader
              acceptedFileExtensions={!isBefore( new Date(magazine?.closureTemp), new Date()) ? '.pdf,.docx,.doc,' : '.notexit'}
              maxSizeFile={20}
              initFiles={artical}
              refStorage={`magazines/${magazineId}`}
              onChange={(files: any) => {
                setArtical(
                  files.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    assetUrl: item.assetUrl,
                    size: item.size,
                    type: item.type,
                  }))
                )
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="image" sm="2">
            Image
          </Label>
          <Col lg="9" sm="10">
            <Uploader
              acceptedFileExtensions={!isBefore( new Date(magazine?.closureTemp), new Date()) ?'.png,.jpg,.jpeg,' : '.notexit'}
              maxSizeFile={20}
              initFiles={image}
              refStorage={`magazines/${magazineId}`}
              onChange={(files: any) => {
                setImage(
                  files.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    assetUrl: item.assetUrl,
                    size: item.size,
                    type: item.type,
                  }))
                )
              }}
            />
            { !isBefore( new Date(magazine?.closureTemp), new Date()) &&
              <div
              className={css({
                display: 'flex',
                justifyContent: 'flex-start',
                paddingTop: theme.sizing.scale400,
                alignItems: 'center',
                width: '80%',
              })}
            >
              <Checkbox
                overrides={{
                  Root: {
                    style: () => ({
                      marginTop: '12px',
                    }),
                  },
                  Checkmark: {
                    style: ({ $theme }) => ({
                      backgroundColor: checked
                        ? $theme.colors.positive300
                        : 'white',
                    }),
                  },
                }}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <div
                className={css({
                  ...theme.typography.font200,
                  marginTop: '7px',
                  lineHeight: 2,
                })}
              >
                I agree to the Terms and Conditions
              </div>
            </div>}
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-center">
          {checked  && !isBefore( new Date(magazine?.closureTemp), new Date()) ? (
            <PrimaryButton type="submit">Submit</PrimaryButton>
          ) : (
            <PrimaryButton disabled>Submit</PrimaryButton>
          )}
        </div>
      </Form>
    </Container>
  )
}
