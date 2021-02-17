import React, { useEffect }from 'react'
import { useGetMagazineQuery } from '../graphql/autogenerate/hooks'
import { Container, Row } from 'reactstrap'
import { Tabs, Tab, makeStyles} from '@material-ui/core';
import './magazine.css'
import { MagazineBlock } from '../components/MagazineBlock'


//Style for Tabs
const useStyles = makeStyles(() => ({
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
  
const handleQueryVariables = (value: any) => {
    if(value == 0) return {closureTemp: {_gt: "now()"}} 
    else if (value == 1) return {closureFinal: {_gt: "now()"}}
    else if (value == 2) return {closureFinal: {_lt: "now()"}}
}

export const MagazinesPage = () => {
    const [value, setValue] = React.useState(0)
    const { data, loading, error } = useGetMagazineQuery({
        fetchPolicy: 'network-only',
        variables: { where: handleQueryVariables(value)}
      })
    const mgzDetail = data && data.magazines
    
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue)
    }
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
export default Magazines

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