import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CustomTableCell from './CustomTableCell'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name,date,players, winners,notes,valid) {
    return { name,date,players,winners,notes,valid };
}


const rows = [
    createData('Unstable Unicorns', 'Aug 23, 2020 8:30 pm',['connor ','alex ','garrett ', 'matt ','molly'], ['garrett'],'molly could\'ve won', 'true'),
    createData('Unstable Unicorns', 'Aug 23, 2020 8:30 pm', ['connor ', 'alex ', 'garrett '], ['garrett'],'molly could\'ve won', 'true'),
    createData('Unstable Unicorns', 'Aug 23, 2020 8:30 pm', ['connor ', 'alex ', 'garrett '], ['garrett'],'molly could\'ve won', 'true'),
    createData('Unstable Unicorns','Aug 23, 2020 8:30 pm' ,['connor ','alex ','garrett '], ['garrett'],'molly could\'ve won', 'true'),

];

export default function SimpleTable() {
    const classes = useStyles();
    let i = 0;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Name</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align='left'>Players</TableCell>
                        <TableCell align="left">Winners</TableCell>
                        <TableCell align='left'>Notes</TableCell>
                        <TableCell align='left'>Valid Game</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        // <TableRow key={row.name}>
                            <CustomTableCell align='left'
                                key={i++}
                                name={row.name}
                                date={row.date}
                                players={row.players}
                                winners={row.winners}
                                notes={row.notes}
                                valid={row.valid}
                            ></CustomTableCell>
                            /* <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align='right'>{row.players}</TableCell>
                            <TableCell align="right">{row.winners}</TableCell>
                            <TableCell align="right">{row.notes}</TableCell>
                            <TableCell align='right'>{row.valid}</TableCell> */

                        // </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
