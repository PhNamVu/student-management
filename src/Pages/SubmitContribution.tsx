import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Form, FormGroup, Label, Col, Input, Row, Button } from 'reactstrap'
import UploadArticle from '../components/UploadArticle'
import UploadImage from '../components/UploadImage'
import 'semantic-ui-css/semantic.min.css'


type Props = {
    userId: string,
}
export default function SubmitContributionPage({ userId }: Props) {
    const params = useParams()
    return (
        <Container>
            <h2 style={{ padding: "3rem 0", clear: 'both' , }}>Submit Contribution</h2>
            <Form>
                <FormGroup row >
                    <Label for="title" sm='2'>Title</Label>
                    <Col lg='9' sm='10'>
                        <Input id="title" />
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
                <div className="d-flex justify-content-center">
                    <Button style={{backgroundColor:'#ffc107', border:'none'}}>Submit</Button>
                </div>
                
            </Form>
        </Container>
    )
}