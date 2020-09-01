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
        flexDirection: 'column',
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    },
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: "200px",
        padding: "1rem",

    },
    addButton: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: "25px"
    },

}));


const columns = ["Name", "Date", "Players", "Winners", "Notes"]


const TableList = ({ id, game }) => {
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
    console.log(game)

    // useEffect(() => {
    //     const fetch = async () => {
    //         const { data } = await Axios.get(`/api/playedgames/${game}`)
    //         console.log(data)
    //         setPlayedGames(data)
    //     }
    //     fetch()
    // }, [])
    // console.log(playedGames)
    return (
        <div className={classes.root} id={id}>
            <div className={classes.container}>

                <TableContainer component={Paper} style={{ width: "80vw" }}>

                    <Table className={classes.table} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                {columns.map(column => <TableCell key={column} align="left">{column}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {game.map((game) => (
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
                {/* </div> */}

                <Modal open={open} close={handleClose} />


                <div className={classes.addButton}>
                    <Fab color="primary" align="left" aria-label="add" onClick={handleOpen} >
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        </div>
    );
}


export default TableList
