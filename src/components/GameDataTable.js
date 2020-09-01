import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    },
    table: {
        marginTop: "200px",
        width: '85%'
    }
});

const GameDataTable = ({ data, id }) => {
    const classes = useStyles();

    useEffect(() => {
        const fetch = async () => {
            const { data } = await Axios.get(`/api/games/`)
        }
        // fetch()
    }, [])
    return (
        <div className={classes.mainContainer}>
            <TableContainer id={id} component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Wins</TableCell>
                            <TableCell align="right">Losses</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? data.map((item) => (
                            <TableRow key={item.firstName}>
                                <TableCell component="th" scope="row">
                                    {item.firstName}
                                </TableCell>
                                <TableCell align="right">{item.totalWins}</TableCell>
                                <TableCell align="right">{item.totalLosses}</TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default GameDataTable