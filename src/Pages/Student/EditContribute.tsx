import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, FormGroup, Label, Col, Input, Row, Button } from 'reactstrap'
import Comment from '../../components/Comment'
import 'semantic-ui-css/semantic.min.css'

import { useGetContributionQuery, useUpdateContributionMutation, useUpdateStatusMutation, GetContributionDocument } from '../../graphql/autogenerate/hooks'
import { StyledSpinnerNext } from 'baseui/spinner'
import { toaster } from 'baseui/toast'
import { Uploader } from '../../components/Uploader'
import PrimaryButton from '../../components/shared/button/PrimaryBtn'
import { isBefore } from 'date-fns'
import { useAuth } from '../../hooks/use-auth'



export default function EditContributePage() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [artical, setArtical] = useState([])
    const [image, setImage] = useState([])
    const {id} = useParams()

    const { state }: any = useAuth()
    const userRole : any= state.customClaims.claims['https://hasura.io/jwt/claims'][
        'x-hasura-default-role'
    ]
    const userId: any = state.customClaims.claims['https://hasura.io/jwt/claims'][
      'x-hasura-user-id'
    ]

    const isDisabled = (userRole == 'coordinator')? true : false

    const { data, loading, error } = useGetContributionQuery({
        variables: {
            id,
        },
    })

    const contribution = data && data.contributions[0]
    const [updateContribution] = useUpdateContributionMutation()
    const [updateStatus] = useUpdateStatusMutation()

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
        console.log('load')
        return <StyledSpinnerNext/>
    }

    if(error) {
        return <div>Error at EditContributePage</div>
    }
    
    const handleState = async (e: any, state: any) => {
        e.preventDefault()
        try {
            updateStatus({
                variables: {
                    id: id,
                    object: {
                        isSelected: state,
                        public_by: userId,
                        updatedAt: new Date().toISOString
                    }
                },
                refetchQueries: [
                    {  query: GetContributionDocument,
                        variables: {
                            id,
                        },
                    }
                  ]
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <h2 style={{ padding: "20px 0", clear: 'both' }}>Contribution {contribution?.title}</h2>
            {(userRole == 'coordinator' && contribution?.isSelected == null)?
            <Row className='mb-4'>
                <Col sm='1'>
                    <Button style={{ backgroundColor: '#00CA39', borderColor: '#00CA39' }} onClick={(e) => handleState(e, true)}>
                        <span>Accept</span>
                    </Button>
                </Col>
                <Col sm='1' >
                    <Button style={{ backgroundColor: '#E44067', borderColor: '#E44067' }} onClick={(e) => handleState(e, false)}>
                        <span>Deny</span>
                    </Button>
                </Col>
            </Row>: null}

            {(contribution?.isSelected == true)? 
                <Row className='mb-4 col-12'>
                    <em style={{color:'#00CA39'}}>This contribution is <b>ACCEPTED</b> for publicising</em>
                </Row>
            :null}
            {(contribution?.isSelected == false)? 
                <Row className='mb-4 col-12'>
                    <em style={{color:'#E44067'}}>This contribution is <b>DENIED</b> for publicising</em>
                </Row>
            :null}

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
                                    disabled={isDisabled}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="article" sm='2'>Article</Label>
                            <Col lg='9' sm='10'>
                                { !isBefore(new Date(contribution?.magazine?.closureFinal), new Date()) ?
                                    <Uploader
                                        disabled={isDisabled}
                                        acceptedFileExtensions={'.docx,.doc,'}
                                        maxSizeFile={20}
                                        initFiles={contribution?.artical}
                                        refStorage={`magazines/${contribution?.magazine?.id}`}
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
                        <FormGroup row >
                            <Label for="image" sm='2'>Image</Label>
                            <Col lg='9' sm='10'>
                                {   !isBefore(new Date(contribution?.magazine?.closureFinal), new Date()) ?
                                    <Uploader
                                        disabled={isDisabled}
                                        acceptedFileExtensions={'.png,.jpg,.jpeg,'}
                                        maxSizeFile={20}
                                        initFiles={contribution?.image}
                                        refStorage={`magazines/${contribution?.magazine?.id}`}
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
                        {(userRole == 'student')?<div className="d-flex justify-content-center">
                            <PrimaryButton 
                                type="submit" 
                                disabled={isBefore(new Date(contribution?.magazine?.closureFinal), new Date())}
                            >
                                Save
                            </PrimaryButton>
                        </div>: null}
                    </Form>
                    
                </Col>
                <Col lg='6' sm='12'>
                    <Comment contributionId={id}/>
                </Col>
            </Row>
        </Container>
    )
}