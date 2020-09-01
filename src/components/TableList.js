import React, { useEffect, useState } from 'react';
import { Table, TableBody, Paper, TableRow, TableHead, TableContainer, TableCell, makeStyles } from '@material-ui/core'
import CustomTableCell from './CustomTableCell'
import Axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from './reusable/Modal'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    table: {
        minWidth: 650,
    },
    container: {
        padding: "1rem",
    },
    addButton: {
        alignSelf: 'flex-end',
        paddingRight: '40px'
    },

}));


const columns = ["Name", "Date", "Players", "Winners", "Notes"]


const TableList = () => {
    const [playedGames, setPlayedGames] = useState([])
    const classes = useStyles();
    let i = 0;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        const fetch = async () => {
            const { data } = await Axios.get('/api/playedgames')
            setPlayedGames(data)
        }
        fetch()
    }, [])

    return (
        <div className={classes.root}>
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
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Modal open={open} close={handleClose} />


            <div className={classes.addButton}>
                <Fab color="primary" align="left" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}


export default TableList