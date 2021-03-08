import React from 'react'
import moment from 'moment';

//this function calculate how many days and time left base on closure timeStamp => return thepercent of the line
export const lineWidthPercent = (tabStatus: number, closureTemp: string, closureFinal: string, createAt: string) => {
    if(tabStatus === 0){
        const timeRemain = moment(closureTemp).diff(moment().startOf('day'), 'minutes')
        const timeTotal = moment(closureTemp).diff(moment(createAt), 'minutes')
        if(timeRemain > 0 ) {
            const rs = (100/timeTotal) * (timeTotal-timeRemain)
            return `${rs}%`
        } else return '100%'
    }
    if(tabStatus === 1){
        const timeRemain = moment(closureFinal).diff(moment().startOf('day'), 'minutes')
        const timeTotal = moment(closureFinal).diff(moment(createAt), 'minutes')
        if(timeRemain > 0 ) {
            const rs = (100/timeTotal) * (timeTotal-timeRemain)
            return `${rs}%`
        } else return '100%'
    }
    if(tabStatus === 2) return '100%'
}

export const showRemainTime = (tabStatus: number, closureTemp: string, closureFinal: string) => {
    if(tabStatus === 0){
        const timeRemain = moment.duration(moment(closureTemp).diff(moment().startOf('day')) )

        //Get Days
        const days = Math.floor(timeRemain.asDays());
        timeRemain.subtract(moment.duration(days,'days'));

        //Get hours
        const hours = timeRemain.hours();
        timeRemain.subtract(moment.duration(hours,'hours'));

        //Get Minutes
        const minutes = timeRemain.minutes();
        timeRemain.subtract(moment.duration(minutes,'minutes'));

        return `${days} ${(days > 1)? 'days': 'day'} ${hours} ${(hours > 1)? 'hours': 'hour'} ${minutes} ${(minutes > 1)? 'minutes': 'minute'} left`
    }
    if(tabStatus === 1){
        const timeRemain =  moment.duration(moment(closureFinal).diff(moment().startOf('day')) ) 
        //Get Days
        const days = Math.floor(timeRemain.asDays());
        timeRemain.subtract(moment.duration(days,'days'));

        //Get hours
        const hours = timeRemain.hours();
        timeRemain.subtract(moment.duration(hours,'hours'));

        //Get Minutes
        const minutes = timeRemain.minutes();
        timeRemain.subtract(moment.duration(minutes,'minutes'));

        //return fortmat 'x days|day y hours|hour z minutes|minute'
        return `${days} ${(days > 1)? 'days': 'day'} ${hours} ${(hours > 1)? 'hours': 'hour'} ${minutes} ${(minutes > 1)? 'minutes': 'minute'} left`

    }
    if(tabStatus === 2) return `Complete`
}