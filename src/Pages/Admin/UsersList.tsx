import React from 'react'
import { useGetUsersQuery } from '../../graphql/autogenerate/hooks'
import { Container, Table } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TableBody, TableHead, TableRow, TableCell, TableContainer, TablePagination, CircularProgress, Backdrop  } from "@material-ui/core"
import PrimaryButton from '../../components/shared/button/PrimaryBtn';

//Define for the header row
interface HeadCell {
    id: keyof Data;
    label: string;
}
const headCells: HeadCell[] = [
    { id: "email", label: "Email" },
    { id: "full_name", label: "Full Name" },
    { id: "role", label: "Role" },
    { id: "faculty", label: "Faculty" }
];

//Define the table content rows
interface Data {
    email: string;
    full_name: string;
    role: string;
    faculty: string;
}
function createData(
    email: string,
    full_name: string,
    role: string,
    faculty: string
): Data {
    return { email, full_name, role, faculty }
}

const CustomTableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='left'
                        padding='default'
                        style={{fontWeight:'bold', fontSize:'1.05rem'}}
                    >
                        {headCell.label}
                    </TableCell>
                ))} {/* close headCells.map*/}
            </TableRow>
        </TableHead>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        table: {
            minWidth: 750
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
)

export default function UserList() {
    const navigate = useNavigate()
    const params = useParams();
    const customStyle = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const { data, loading, error } = useGetUsersQuery({
        fetchPolicy: 'network-only'
    })
    if (loading) return (
        <Backdrop className={customStyle.backdrop} open={loading}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
    if (error) return <div> Error at UsersList page {console.log(error)}</div>
    const dataDetail = data && data.users
    const rows: any = dataDetail?.map((el:any) => {
        return createData(el.email, el.fullName, el.roles, el.faculty?.label)
    })

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    
    return (
        <Container>
            <h2 style={{ padding: "20px 0 0 0", clear: 'both' }}>Users List {params.mgzTitle}</h2>
            <PrimaryButton
                onClick = { () => { navigate(`/user/add`)}}
            >
                Create
            </PrimaryButton>
            <div className={customStyle.root}>
                <TableContainer>
                    <Table
                        className={customStyle.table}
                        aria-labelledby="tableTitle"
                        size="small"
                        aria-label="enhanced table"
                    >
                        <CustomTableHeader />
                        <TableBody>
                            {(rows)?rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                                return (
                                    <TableRow
                                        tabIndex={-1}
                                        key={row.email}
                                    >
                                        <TableCell component="th" scope="row">{row.email}</TableCell>
                                        <TableCell align="left">{row.full_name}</TableCell>
                                        <TableCell align="left">{row.role}</TableCell>
                                        <TableCell align="left">{row.faculty}</TableCell>
                                    </TableRow>
                                )
                            }): null}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={(rows) ? rows.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </Container>
    )
}