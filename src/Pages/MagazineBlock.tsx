/* eslint-disable prefer-const */
import React from 'react'
import moment from 'moment';
import { Card, CardText, CardBody, CardTitle, Col, Button} from 'reactstrap';



const showRemainTime = (tabStatus: number, closureTemp: string, closureFinal: string) => {
    if(tabStatus === 0){
        //lay closureTemp - dateNow() => n days con lai
        let closureTempDate = moment(closureTemp)
        let daysRemain = closureTempDate.diff(moment().startOf('day'), 'days') 
        if(daysRemain >= 0) return `${daysRemain} days left`
        else if(daysRemain < 0) return `Complete`
    }
}

const percentdaysLeft = (tabStatus: number, closureTemp: string, closureFinal: string, createAt: string) => {
    //100% = 0 days left
    //0% = closureDate - createDate
    if(tabStatus === 0){
        let daysRemain = moment(closureTemp).diff(moment().startOf('day'), 'days')
        let daysTotal = moment(closureTemp).diff(moment(createAt), 'days')
        if(daysRemain > 0 ) {
            let rs = (100/daysTotal) * (daysTotal-daysRemain)
            return `${rs}%`
        } else return '100%'
        
    }
}

type Props = {
    label: string;
    closureTemp: string;
    closureFinal: string;
    tabStatus: number;
    createdAt: string
};



export const MagazineBlock = ({ label, closureTemp, closureFinal, tabStatus, createdAt }: Props) => {
    const closureTempDate = (moment(closureTemp)).format('DD/MM/YYYY HH:mm:ss')
    const closureFinalpDate = (moment(closureFinal)).format('DD/MM/YYYY HH:mm:ss')
    const lineWidth = percentdaysLeft(tabStatus, closureTemp, closureFinal, createdAt)
    let lineStyle = { "width": `${lineWidth}` } as React.CSSProperties
    
    return (
        <Col lg="4" sm='12'>
            <Card style={{margin: '0 0 26px 0'}}>
                <CardBody>
                    <CardText className="d-flex align-items-center justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 443.294 443.294" viewBox="0 0 443.294 443.294" width="4.5%"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/></svg>
                        <small>&nbsp;&nbsp;{showRemainTime(tabStatus, closureTemp, closureFinal)}</small>
                    </CardText>
                    <CardTitle tag="h5">{label}</CardTitle>
                    <CardText>
                        <small>
                            SUBMIT CLOSURE: {closureTempDate} <br/> 
                            FINAL CLOSURE: {closureFinalpDate}
                        </small>
                    </CardText>
                    <div className="d-flex align-items-center justify-content-end" >
                        <Button color="warning" className='btn-circle btn-lg'>
                            <i className="fas fa-edit"></i>
                        </Button>
                    </div>
                </CardBody>
                
                <div className="line" style={lineStyle}></div>
            </Card>
        </Col>
    )
}