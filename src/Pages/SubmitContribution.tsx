import React, { useState } from 'react'
import {
  Container,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
} from 'reactstrap'

import 'semantic-ui-css/semantic.min.css'
import { useParams } from 'react-router'
import { toaster } from 'baseui/toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { useAuth } from '../hooks/use-auth'
import { useAddContributionMutation } from '../graphql/autogenerate/hooks'
import { Uploader } from '../components/Uploader'

export default function SubmitContributionPage() {
  const navigate = useNavigate()
  const { idMgz: magazineId } = useParams()
  const id = uuidv4()

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
  const [addContribution] = useAddContributionMutation()

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
      <h2 style={{ padding: '3rem 0', clear: 'both' }}>Submit Contribution</h2>
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
              acceptedFileExtensions={'.pdf,.docx,.doc,'}
              maxSizeFile={20}
              initFiles={artical}
              refStorage={`magazines/${magazineId}/${id}`}
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
              acceptedFileExtensions={'.png,.jpg,.jpeg,'}
              maxSizeFile={20}
              initFiles={image}
              refStorage={`magazines/${magazineId}/${id}`}
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
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-center">
          <Button
            style={{ backgroundColor: '#ffc107', border: 'none' }}
            type='submit'
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}
