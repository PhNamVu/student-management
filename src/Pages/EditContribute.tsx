import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Form, FormGroup, Label, Col, Input, Row } from 'reactstrap'
import UploadArticle from '../components/UploadArticle'
import UploadImage from '../components/UploadImage'
import Comment from '../components/Comment'
import 'semantic-ui-css/semantic.min.css'
import { useAuth } from '../hooks/use-auth'



export default function EditContributePage() {
    const { state }: any = useAuth()
    const userId: any =
    state.customClaims.claims['https://hasura.io/jwt/claims'][
    'x-hasura-user-id'
    ]
    const params = useParams()
    return (
        <Container>
            <h2 style={{ padding: "20px 0", clear: 'both' }}>Edit Contribution</h2>
            <Row>
                <Col lg='6' sm='12'>
                    <Form>
                        <FormGroup row >
                            <Label for="title" sm='2'>Title</Label>
                            <Col lg='9' sm='10'>
                                <Input id="title" value={params.contributionTitle}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="article" sm='2'>Article</Label>
                            <Col lg='9' sm='10'>
                                <UploadArticle />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="image" sm='2'>Image</Label>
                            <Col lg='9' sm='10'>
                                <UploadImage />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col lg='6' sm='12'>
                    <Comment userId={userId} contributionId={params.contributionId}/>
                </Col>
            </Row>
        </Container>
    )
}