import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, FormGroup, Label, Col, Input, Row } from 'reactstrap'
import Comment from '../components/Comment'
import 'semantic-ui-css/semantic.min.css'

import { useGetContributionQuery, useUpdateContributionMutation } from '../graphql/autogenerate/hooks'
import { StyledSpinnerNext } from 'baseui/spinner'
import { toaster } from 'baseui/toast'
import { Uploader } from '../components/Uploader'
import PrimaryButton from '../components/shared/button/PrimaryBtn'
import { isBefore } from 'date-fns'



export default function EditContributePage() {
    const navigate = useNavigate()
   
    const [title, setTitle] = useState('')
    const [artical, setArtical] = useState([])
    const [image, setImage] = useState([])
    const {id} = useParams()

    const { data, loading, error } = useGetContributionQuery({
        variables: {
            id,
        },
    })
    const contribution = data && data.contributions[0]
    const [updateContribution] = useUpdateContributionMutation()

    const submitHandler = async (e: any) => {
        e.preventDefault()
        try {
                    
            await updateContribution({
            variables: {
                id,
                object: {
                    title: title !== '' ? title : contribution?.title,
                    artical: artical.length !== 0 ? artical : contribution?.artical,
                    image: image.length !== 0  ? image : contribution?.image,
                    updatedAt: new Date().toISOString
                },
            },
            })
            toaster.positive('Update contribution successful', {
                autoHideDuration: 3000,
            })
            navigate('/contributions')
            } catch (error) {
            console.log(error)
            toaster.negative('Update contribution fail', {
                autoHideDuration: 3000,
            })
            }
        }

    if(loading) {
        return <StyledSpinnerNext/>
    }

    if(error) {
        return <div>Error at EditContributePage</div>
    }
    
    
    return (
        <Container>
            <h2 style={{ padding: "20px 0", clear: 'both' }}>Edit Contribution</h2>
            <Row>
                <Col lg='6' sm='12'>
                    <Form onSubmit={submitHandler}>
                        <FormGroup row >
                            <Label for="title" sm='2'>Title</Label>
                            <Col lg='9' sm='10'>
                                <Input 
                                    id="title" 
                                    value={contribution?.title && title === '' ? contribution.title : title} 
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="article" sm='2'>Article</Label>
                            <Col lg='9' sm='10'>
                                { !isBefore(new Date(contribution?.magazine.closureFinal), new Date()) ?
                                    <Uploader
                                        acceptedFileExtensions={'.docx,.doc,'}
                                        maxSizeFile={20}
                                        initFiles={contribution?.artical}
                                        refStorage={`magazines/${contribution?.magazine.id}`}
                                        onChange={(files: any) => {
                                            console.log(files)
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
                                    : (
                                        contribution?.artical.map((item: any) => 
                                            <div key={item.id} style={{border: '2px solid #F8F8F8', backgroundColor: '#fff'}}>
                                                <a href={item.assetUrl} target='_blank' rel="noreferrer">{item.name}</a>
                                            </div>
                                        )
                                    )
                                }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="image" sm='2'>Image</Label>
                            <Col lg='9' sm='10'>
                                {   !isBefore(new Date(contribution?.magazine.closureFinal), new Date()) ?
                                    <Uploader
                                        acceptedFileExtensions={'.png,.jpg,.jpeg,'}
                                        maxSizeFile={20}
                                        initFiles={contribution?.image}
                                        refStorage={`magazines/${contribution?.magazine.id}`}
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
                                    : (
                                        contribution?.image.map((item: any) => 
                                            <div key={item.id} style={{border: '2px solid #F8F8F8', backgroundColor: '#fff'}}>
                                                <a href={item.assetUrl} target='_blank' rel="noreferrer">{item.name}</a>
                                            </div>
                                        )
                                    )
                                }
                            </Col>
                        </FormGroup>
                        <div className="d-flex justify-content-center">
                            <PrimaryButton 
                                type="submit" 
                                disabled={isBefore(new Date(contribution?.magazine.closureFinal), new Date())}
                            >
                                Save
                            </PrimaryButton>
                        </div>
                    </Form>
                </Col>
                <Col lg='6' sm='12'>
                    <Comment contributionId={id}/>
                </Col>
            </Row>
        </Container>
    )
}