import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, wins, losses) {
    return { name, wins, losses };
}


const rows = [
    createData('Alex (Spicy Pepper)', 159, 6.0, 24, 4.0),
    createData('Matt (Sick Fev3R)', 237, 9.0, 37, 4.3),
    createData('Connor (Con-dog)', 262, 16.0, 24, 6.0),
    createData('Garrett (Garrett) ', 305, 3.7, 67, 4.3),

];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer id="link" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Wins</TableCell>
                        <TableCell align="right">Losses</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.wins}</TableCell>
                            <TableCell align="right">{row.losses}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
