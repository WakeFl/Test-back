import { useSelector } from "react-redux/es/hooks/useSelector"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CompletedList = () => {

    const completed = useSelector(state => state.completed.completed)

    return (
        <>
            <h1 className="section-title">Completed chellenges</h1>
            {completed.length
                ? <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, color: "#212846" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >№</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="right">When</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {completed.map((item, id) => (
                                <TableRow
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{id + 1}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.activity}
                                    </TableCell>
                                    <TableCell align="center">{item.type}</TableCell>
                                    <TableCell align="right">{item.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <p style={{ height: "132px", fontSize: "30px", marginTop: "40px" }}>There are no completed tasks on your list</p>}

        </>
    )
}
export default CompletedList