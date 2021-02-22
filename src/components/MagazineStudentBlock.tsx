/* eslint-disable prefer-const */
import React from 'react'
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle, Col, Button} from 'reactstrap';

const showRemainTime = (tabStatus: number, closureTemp: string, closureFinal: string) => {
    if(tabStatus === 0){
        let timeRemain = moment.duration(moment(closureTemp).diff(moment().startOf('day')) )

        //Get Days
        let days = Math.floor(timeRemain.asDays());
        timeRemain.subtract(moment.duration(days,'days'));

        //Get hours
        let hours = timeRemain.hours();
        timeRemain.subtract(moment.duration(hours,'hours'));

        //Get Minutes
        let minutes = timeRemain.minutes();
        timeRemain.subtract(moment.duration(minutes,'minutes'));

        return `${days} ${(days > 1)? 'days': 'day'} ${hours} ${(hours > 1)? 'hours': 'hour'} ${minutes} ${(minutes > 1)? 'minutes': 'minute'} left`
    }
    if(tabStatus === 1){
        let timeRemain =  moment.duration(moment(closureFinal).diff(moment().startOf('day')) ) 
        //Get Days
        let days = Math.floor(timeRemain.asDays());
        timeRemain.subtract(moment.duration(days,'days'));

        //Get hours
        let hours = timeRemain.hours();
        timeRemain.subtract(moment.duration(hours,'hours'));

        //Get Minutes
        let minutes = timeRemain.minutes();
        timeRemain.subtract(moment.duration(minutes,'minutes'));

        //return fortmat 'x days|day y hours|hour z minutes|minute'
        return `${days} ${(days > 1)? 'days': 'day'} ${hours} ${(hours > 1)? 'hours': 'hour'} ${minutes} ${(minutes > 1)? 'minutes': 'minute'} left`

    }
    if(tabStatus === 2) return `Complete`
}

const percentdaysLeft = (tabStatus: number, closureTemp: string, closureFinal: string, createAt: string) => {
    if(tabStatus === 0){
        let timeRemain = moment(closureTemp).diff(moment().startOf('day'), 'minutes')
        let timeTotal = moment(closureTemp).diff(moment(createAt), 'minutes')
        if(timeRemain > 0 ) {
            let rs = (100/timeTotal) * (timeTotal-timeRemain)
            return `${rs}%`
        } else return '100%'
    }
    if(tabStatus === 1){
        let timeRemain = moment(closureFinal).diff(moment().startOf('day'), 'minutes')
        let timeTotal = moment(closureFinal).diff(moment(createAt), 'minutes')
        if(timeRemain > 0 ) {
            let rs = (100/timeTotal) * (timeTotal-timeRemain)
            return `${rs}%`
        } else return '100%'
    }
    if(tabStatus === 2) return '100%'
}

type Props = {
    id: string
    label: string;
    closureTemp: string;
    closureFinal: string;
    tabStatus: number;
    createdAt: string
};

export const MagazineStudentBlock = ({ id, label, closureTemp, closureFinal, tabStatus, createdAt }: Props) => {
    const closureTempDateString = (moment(closureTemp)).format('DD/MM/YYYY HH:mm A')
    const closureFinalpDateString = (moment(closureFinal)).format('DD/MM/YYYY HH:mm A')
    const lineWidth = percentdaysLeft(tabStatus, closureTemp, closureFinal, createdAt)
    let lineStyle = { "width": `${lineWidth}` } as React.CSSProperties

    let navigate = useNavigate();
    const handleSubmitBtn = (idMgz: string) => {
        navigate(`/stu/submitContribute/${idMgz}`)
    }
    
    return (
        <Col lg="4" sm='12'>
            <Card style={{margin: '0 0 26px 0'}}>
                <CardBody>
                    <CardText className="d-flex align-items-center justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 443.294 443.294" viewBox="0 0 443.294 443.294" width="4.5%"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/></svg>
                        <small style={{fontSize: '80%'}}>&nbsp;&nbsp;{showRemainTime(tabStatus, closureTemp, closureFinal)}</small>
                    </CardText>
                    <CardTitle tag="h3">{label}</CardTitle>
                    <CardText style={{marginBottom:'10px'}}>
                        <small style={(tabStatus == 0)?{ 'fontWeight': 'bold', fontSize: '60%' } :{fontSize: '60%' }}>SUBMIT CLOSURE: {closureTempDateString}</small>
                        <br />
                        <small style={(tabStatus == 1)?{ 'fontWeight': 'bold', fontSize: '60%' } :{fontSize: '60%' }}>FINAL CLOSURE: {closureFinalpDateString}</small>
                    </CardText>
                    <div className="d-flex align-items-center justify-content-end" >
                        <Button color="warning" className='btn-circle btn-lg' onClick={() =>{handleSubmitBtn(id)}}>
                            <i className="fas fa-plus"></i>
                            <span style={{fontSize: '80%'}}>&nbsp;&nbsp;Submit Contribution</span>
                        </Button>
                        
                    </div>
                </CardBody>
                
                <div className="line" style={lineStyle}></div>
            </Card>
        </Col>
    )
}
export default MagazineStudentBlock