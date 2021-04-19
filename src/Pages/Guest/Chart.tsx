/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
import { Pie } from 'react-chartjs-2'
import { Row, Col} from 'reactstrap'
import { CircularProgress, Backdrop  } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useStatisticChartQuery } from '../../graphql/autogenerate/hooks'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
)

const colorLibrary = ['#f94144', '#f3722c','#f8961e', '#f9844a', '#f9c74f', '#90be6d',, '#43aa8b', '#43aa8b', '#4d908e', '#577590', '#277da1']

const getChartData = (dataDB: any) => {
    let labelList: any = []
    let dataList: any = []
    dataDB.forEach( (el:any) => {
        if(el.count > 0) {
            labelList.push(el.label)
            dataList.push(el.count)
        }
    })
    return {
        labels: labelList,
        datasets: [
            {
                data: dataList,
                backgroundColor: colorLibrary
            },
        ],
    }
}

export default function GuestChart() {
    const customStyle = useStyles();

    //Get data from DB
    const { data, loading, error } = useStatisticChartQuery()
    if (loading) return (
        <Backdrop className={customStyle.backdrop} open={loading}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
    if (error) return <div> Error at Magazines component {console.log(error)}</div>
    const dataDetail = data && data.view_contributions_facultys
    const chartData = getChartData(dataDetail)

    return (
        <div>
            <Row className='d-flex justify-content-center p-4'>
                <h2 className='title'>Contributions by Faculty Chart</h2>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col sm='8'>
                    <Pie data={chartData} />
                </Col>
            </Row>
        </div>
    )
}