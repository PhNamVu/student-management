/* eslint-disable prefer-const */
import React from 'react'
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Col, Button} from 'reactstrap';
import { lineWidthPercent, showRemainTime } from './CalculateTime'
import { useAuth } from '../../hooks/use-auth';

type Props = {
    id: string;
    label: string;
    closureTemp: string;
    closureFinal: string;
    tabStatus: number;
    createdAt: string
};

export const MagazineBlock = ({ id, label, closureTemp, closureFinal, tabStatus, createdAt }: Props) => {
    const closureTempDateString = (moment(closureTemp)).format('DD/MM/YYYY HH:mm A')
    const closureFinalpDateString = (moment(closureFinal)).format('DD/MM/YYYY HH:mm A')
    let lineStyle = { "width": `${lineWidthPercent(tabStatus, closureTemp, closureFinal, createdAt)}` } as React.CSSProperties

    const { state }: any = useAuth()
    const userRole : any= state.customClaims.claims['https://hasura.io/jwt/claims'][
        'x-hasura-default-role'
    ]

    let navigate = useNavigate();
    const handleEditMagazine = (idMgz: string,) => {
        navigate(`/magazine/${idMgz}/edit`)
    }
    const handleViewContribute = (idMgz: string, titleMgz: string) => {
        navigate(`/contribute/${idMgz}/${titleMgz}`)
    }
    const handleSubmitBtn = (idMgz: string) => {
        navigate(`/submitContribute/${idMgz}`)
    }

    return (
        <Col lg="4" sm='12' className='d-flex align-items-stretch'>
            <Card style={{margin: '0 0 26px 0'}}>
                <CardBody>
                    <CardText className="d-flex align-items-center justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 443.294 443.294" viewBox="0 0 443.294 443.294" width="4.5%"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/></svg>
                        <small style={{fontSize: '80%'}}>&nbsp;&nbsp;{showRemainTime(tabStatus, closureTemp, closureFinal)}</small>
                    </CardText>

                    <CardTitle tag="h3">{(label.length > 32) ? label.slice(0, 32) + '...' : label}</CardTitle>

                    <CardText style={{marginBottom:'10px'}}>
                        <small style={(tabStatus == 0)?{ 'fontWeight': 'bold', fontSize: '60%' } :{fontSize: '60%' }}>SUBMIT CLOSURE: {closureTempDateString}</small>
                        <br />
                        <small style={(tabStatus == 1)?{ 'fontWeight': 'bold', fontSize: '60%' } :{fontSize: '60%' }}>FINAL CLOSURE: {closureFinalpDateString}</small>
                    </CardText>

                    {/* Render button by role*/}
                    <div className="d-flex align-items-center justify-content-end" >

                        {(userRole == 'admin' && (tabStatus == 0))?
                            <>
                                <Button color="warning" className='btn-circle btn-lg' onClick={() => handleEditMagazine(id)}>
                                    <i className="fas fa-edit"></i>
                                </Button>
                                <Button color="warning" className='btn-circle btn-lg ml-1' onClick={() => handleViewContribute(id, label)}>
                                    <i className="far fa-eye"></i>
                                </Button>
                            </> 
                        : null}
                        
                        {(userRole == 'coordinator' || userRole == 'manager' || (userRole == 'guest' && (tabStatus == 2)) || (userRole == 'admin' && (tabStatus != 0)))?
                            <Button color="warning" className='btn-circle btn-lg' onClick={() =>{handleViewContribute(id, label)}}>
                                <i className="far fa-eye"></i>
                                <span style={{fontSize: '80%'}}>&nbsp;&nbsp;View Contribution</span>
                            </Button>
                        : null}

                        {/* Button for STUDENT role */}
                        {(userRole == 'student' && (tabStatus == 0))?
                            <Button 
                                color="warning" 
                                className='btn-circle btn-lg' 
                                onClick={() =>{handleSubmitBtn(id)}}
                            >
                                <i className="fas fa-plus"></i>
                                <span style={{fontSize: '80%'}}>&nbsp;&nbsp;Submit Contribution</span>
                            </Button>
                        : null}
                        {(userRole == 'student' && (tabStatus == 1))?
                                <Button 
                                    color="warning" 
                                    className='btn-circle btn-lg' 
                                    onClick={() =>{handleViewContribute(id, label)}}
                                >
                                    <i className="fas fa-edit"></i>
                                    <span style={{fontSize: '80%'}}>&nbsp;&nbsp;Your Contributes</span>
                                </Button>
                        : null}
                    </div>

                </CardBody>
                <div className="line" style={lineStyle}></div>
            </Card>
        </Col>
    )
}