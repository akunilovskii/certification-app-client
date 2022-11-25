import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useState} from "react";
import Chip from '@mui/material/Chip';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomizedTable(props: any) {
    const testsList = props.testsList;

    const [selectedTest, setSelectedTest] = useState([]);

    const startTest = (test: []) => {
        setSelectedTest(test);
        console.log(test);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, backgroundColor: 'background.paper' }} aria-label="customized table">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'primary.main'}}>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell >Title</StyledTableCell>
                        <StyledTableCell align="center">Difficulty</StyledTableCell>
                        <StyledTableCell align="right">Time limit</StyledTableCell>
                        <StyledTableCell align="right">Questions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {testsList.map((row:any) => (
                        <StyledTableRow key={row.id} onClick={()=>startTest(row.test)} >
                            <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                            <StyledTableCell >{row.title}</StyledTableCell>
                            <StyledTableCell align="center"><Chip size="small" label={row.difficulty} color={row.difficulty === "easy" ? "success" : row.difficulty === 'medium' ? "warning" : "error"}/></StyledTableCell>
                            <StyledTableCell align="right">{`${row.timeLimit} minutes`}</StyledTableCell>
                            <StyledTableCell align="right">{row.test.length}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
