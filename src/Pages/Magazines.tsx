import React, { useEffect }from 'react'
import { useGetMagazineQuery } from '../graphql/autogenerate/hooks'
import { Container, Row } from 'reactstrap'
import { Tabs, Tab, makeStyles, Theme } from '@material-ui/core';
import './magazine.css'
import { MagazineBlock } from './MagazineBlock'


//Style for Tabs
const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ffc107",
    },
    active_tab: {
        color: "#ffc107",
    },
    default_tabStyle: {
        color: "#9B9B9B",
    }
  }))
  
const handleQueryVariables = (queryCondition: any) => {
    if(queryCondition.isTemp == true) {
        if(queryCondition.isgt == true) return {closureTemp: {_gt: "now()"}} 
    } else if(queryCondition.isTemp == false) {
        if(queryCondition.isgt == true) return {closureFinal: {_gt: "now()"}} 
        else if (queryCondition.isgt == false) return {closureFinal: {_lt: "now()"}} 
    }
}

export const Magazines = (props: any) => {
    const [value, setValue] = React.useState(0)
    const [tempOrFinal, setTempOrFinal] = React.useState({isTemp: true, isgt: true})
    const { data, loading, error } = useGetMagazineQuery({
        fetchPolicy: 'network-only',
        variables: {
            where: handleQueryVariables(tempOrFinal)
        }
      })
    const mgzDetail = data && data.magazines
    
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue)

    }
    useEffect(() => {
        if(value == 0) setTempOrFinal({isTemp: true, isgt: true})
        if(value == 1) setTempOrFinal({isTemp: false, isgt: true})
        if(value == 2) setTempOrFinal({isTemp: false, isgt: false})
    }, [value])
    const classes = useStyles()
    
    // if (loading) return <div>Loading ...</div>
    if (error) return <div> Error at Magazines component {console.log(error)}</div>

    return (
        <Container>
            <div className="justify-content">
                <h2 style={{ padding: "20px 0 1px 12px", }}>Magazines</h2>
                <div className="mgzTabs">
                    <Tabs 
                        value={value}
                        onChange={handleChange}
                        classes={{ indicator: classes.indicator}}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="SUBMITMENT ALLOW" disableRipple style={{padding: '0', margin: '6px 12px 0 12px'}} className={value===0 ? classes.active_tab :classes.default_tabStyle}/>
                        <Tab label="COMPLETE SUBMITMENT" disableRipple style={{padding: '0', margin: '6px 12px 0 12px'}} className={value===1 ? classes.active_tab :classes.default_tabStyle}/>
                        <Tab label="PUBLISHED" disableRipple style={{padding: '0', margin: '6px 12px 0 12px'}} className={value===2 ? classes.active_tab :classes.default_tabStyle}/>
                    </Tabs>
                </div>
                {showMgz(chunk(mgzDetail, 3), value)}
            </div>
        </Container>
    )
}

//divide 3 card each CardDeck (row)
const chunk = (arr: any, chunkSize: number) =>  {
    if(arr) {
        const cache: Array<any> = new Array<any>()
        const tmp = [...arr]
        if (chunkSize <= 0) return cache
        while (tmp.length) cache.push(tmp.splice(0, chunkSize))
        return cache
    }
}
//return data to MagazineBlock
const showMgz = (info: any, value:number) => {
    if(info) {
        return info.map( (subArr: any, index: any) => {
            const aMgzBlock = subArr.map( (el: any, i: any) => {
                return <MagazineBlock key={i} label={el.label} closureTemp={el.closureTemp} closureFinal={el.closureFinal} tabStatus={value} createdAt={el.createdAt}/>
            })
            return <Row key={index} style={{margin: 0}}>{aMgzBlock}</Row>
        })
    }
}