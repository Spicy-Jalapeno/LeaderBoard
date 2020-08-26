import React, { useEffect, useState } from 'react';
import { Table, TableBody, Paper, TableRow, TableHead, TableContainer, TableCell, makeStyles, Modal } from '@material-ui/core'
import CustomTableCell from './CustomTableCell'
import Axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import SimpleModal from './SimpleModal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
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

    }, paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const columns = ["Name", "Date", "Players", "Winners", "Notes"]
// function openModal() {
//     console.log('its clicking')
//     return (<SimpleModal />);
// }

const TableList = () => {
    const [playedGames, setPlayedGames] = useState([])
    const classes = useStyles();
    let i = 0;
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
            <button type="button" onClick={handleClose}> close modal</button>
        </div>
    );

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
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal></div>

            <div className={classes.addButton}>
                <Fab color="primary" align="left" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </div>

        </div>
    );
}


export default TableList
