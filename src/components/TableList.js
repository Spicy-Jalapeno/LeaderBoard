import React, { useEffect, useState } from 'react';
import { Table, TableBody, Paper, TableRow, TableHead, TableContainer, TableCell, makeStyles } from '@material-ui/core'
import CustomTableCell from './CustomTableCell'
import Axios from 'axios';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        padding: "1rem"
    }
});


const columns = ["Name", "Date", "Players", "Winners", "Notes", "Valid Game"]

const TableList = () => {
    const [playedGames, setPlayedGames] = useState([])
    const classes = useStyles();
    let i = 0;

    useEffect(() => {
        const fetch = async () => {
            const { data } = await Axios.get('/api/playedgames')
            setPlayedGames(data)
        }
        fetch()
    }, [])

    return (
        <div className={classes.container}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => <TableCell key={column} align="left">{column}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playedGames.map((game) => (
                            <CustomTableCell align='left'
                                key={i++}
                                name={game.name}
                                date={new Date(game.date._seconds * 1000).toLocaleString('en-US', { month: 'long', weekday: 'long', day: 'numeric' })}
                                players={game.players}
                                winners={game.winners}
                                notes={game.notes}
                                valid={game.validGame.toString()}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


export default TableList