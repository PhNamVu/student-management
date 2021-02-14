import React from 'react'
import { useGetMagazine0Query, useGetMagazine1Query, useGetMagazine2Query } from '../graphql/autogenerate/hooks'
import { Container, Col, Row, CardDeck } from 'reactstrap'
import { Tabs, Tab, makeStyles, Theme } from '@material-ui/core';
import './magazine.css'
import { MagazineBlock } from './MagazineBlock'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(3),
    },
    indicator: {
        backgroundColor: "#ffc107",
    },
    active_tab: {
        color: "#ffc107",
        outline: 'none',
    },
    default_tabStyle: {
        color: "#9B9B9B",
    }
  }))
  
export const Magazines = (props: any) => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue)
    }
    const classes = useStyles()


    
    const {data, loading, error} = useGetMagazineQuery()
    if (loading) return <div>Loading ...</div>
    if (error) return <div> Error at Magazines component {console.log(error)}</div>
    
    const mgzDetail: any = data && data.magazines

    return (
        <Container>
            <div className="justify-content">
                <h2 style={{ padding: "20px 0 1px 12px", }}>Magazines</h2>
                <div className="mgzTabs">
                    <Tabs 
                        value={value}
                        onChange={handleChange}
                        classes={{ indicator: classes.indicator }}
                    >
                        <Tab label="SUBMITMENT ALLOW" disableRipple className={value===0 ? classes.active_tab :classes.default_tabStyle}/>
                        <Tab label="COMPLETE SUBMITMENT" disableRipple className={value===1 ? classes.active_tab :classes.default_tabStyle}/>
                        <Tab label="PUBLISHED" disableRipple className={value===2 ? classes.active_tab :classes.default_tabStyle}/>
                    </Tabs>
                </div>
                {showMgz(chunk(mgzDetail, 3), value)}
            </div>
        </Container>
    )
}

//divide 3 card each CardDeck (row)
const chunk = (arr: any, chunkSize: number):Array<any> =>  {
    const cache: Array<any> = new Array<any>()
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
}

const showMgz = (info: any, value:number) => {
    return info.map( (subArr: any, index: any) => {
        const aMgzBlock = subArr.map( (el: any, i: any) => {
            return <MagazineBlock key={i} label={el.label} closureTemp={el.closureTemp} closureFinal={el.closureFinal} tabStatus={value} createdAt={el.createdAt}/>
        })
        return <Row key={index} style={{ }}>{aMgzBlock}</Row>
    })
}