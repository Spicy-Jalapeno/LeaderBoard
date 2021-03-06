import React from 'react';

import { makeStyles } from '@material-ui/core'
import { forwardRef, useEffect } from 'react';
import Axios from 'axios'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Modal from './reusable/Modal'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    },
    table: {
        minWidth: 650,
    },
    container: {
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
    const [open, setOpen] = React.useState(false);
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
            // console.log('hello')
            // console.log(data)


        }
        fetch()
    }, [])
    const columns = [
        {
            title: 'Name',
            field: 'data.name',
            
        },
        {
            title: 'Date',
            field: 'data.date',
            type: 'datetime',
            

            render: (rowData) => { return new Date(rowData.data.date._seconds * 1000).toLocaleString('en-US', { month: 'long', weekday: 'long', day: 'numeric' }) }
        },
        {
            title: 'Players',
            field: 'data.players',
            grouping: true,
            render: (rowData) => rowData.data.players.join(' ')
        },
        {
            title: 'Winners',
            field: 'data.winners',
            render: (rowData) => rowData.data.winners.join(' ')
            
        },
        {
            title: 'Notes',
            field: 'data.notes',
           
        },
    ];
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
             </div>
        </div >
    );
}

export default TableList
