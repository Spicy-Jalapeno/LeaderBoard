// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, Paper, TableRow, TableHead, TableContainer, TableCell, makeStyles } from '@material-ui/core'
// import CustomTableCell from './CustomTableCell'
// import Axios from 'axios';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Modal from './reusable/Modal'
// import { format } from 'date-fns';
// import TablePagination from '@material-ui/core/TablePagination';
// import Checkbox from '@material-ui/core/Checkbox';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column'
//     },
//     table: {
//         minWidth: 650,
//     },
//     container: {
//         padding: "1rem",
//     },
//     addButton: {
//         alignSelf: 'flex-end',
//         paddingRight: '40px'
//     },

// }));

// const columns = [
//     {
//         id: 'checked'
//     },
//     {
//         id: 'name',
//         label: 'Name',
//         minWidth: 170
//     },

//     {
//         id: 'date',
//         label: 'Date',
//         minWidth: 100,
//         align: 'left',

//     },
//     {
//         id: 'players',
//         label: 'Players',
//         minWidth: 170,
//         align: 'left',

//     },
//     {
//         id: 'winners',
//         label: 'Winners',
//         minWidth: 170,
//         align: 'left',

//     },
//     {
//         id: 'notes',
//         label: 'Notes',
//         minWidth: 170,
//         align: 'left',

//     },
// ];




// const TableList = () => {
//     const [playedGames, setPlayedGames] = useState([])
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
//     const [selected, setSelected] = React.useState([]);
//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };
//     const handleClick = (event, name) => {
//         const selectedIndex = selected.indexOf(name);
//         let newSelected = [];

//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, name);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(
//                 selected.slice(0, selectedIndex),
//                 selected.slice(selectedIndex + 1),
//             );
//         }

//         setSelected(newSelected);
//     };
//     const classes = useStyles();
//     let i = 0;
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const isSelected = (name) => selected.indexOf(name) !== -1;
//     const handleClose = () => {
//         setOpen(false);
//     };


//     useEffect(() => {
//         const fetch = async () => {
//             const { data } = await Axios.get('/api/playedgames')
//             setPlayedGames(data)
//             // console.log(data)

//         }
//         fetch()
//     }, [])

//     return (
//         <div className={classes.root}>
//             <div className={classes.container}>

//                 <TableContainer component={Paper}>

//                     <Table stickyHeader className={classes.table} aria-label="simple table">
//                         <TableHead>

//                             <TableRow>

//                                 {
//                                     console.log(columns),
//                                     columns.map((column) => (
//                                         <TableCell
//                                             key={column.id}
//                                             align={column.align}
//                                             style={{ minWidth: column.minWidth }}
//                                         >
//                                             {column.label}
//                                         </TableCell>
//                                     ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>

//                             {playedGames.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((game,index) => {
//                                 const isItemSelected = isSelected(game.name);
//                                 const labelId = `enhanced-table-checkbox-${index}`;
//                                 return (
//                                     <TableRow hover role="checkbox" tabIndex={-1} key={i++}>


//                                         <Checkbox
//                                             checked={isItemSelected}
//                                             inputProps={{ 'aria-labelledby': labelId }}
//                                         />

//                                         <TableCell >{game.name}</TableCell>
//                                         <TableCell >{new Date(game.date._seconds * 1000).toLocaleString('en-US', { month: 'long', weekday: 'long', day: 'numeric' })}</TableCell>
//                                         <TableCell >{game.players.map(name => `${name} `)}</TableCell>
//                                         <TableCell >{game.winners.map(name => `${name} `)}</TableCell>
//                                         <TableCell >{game.notes}</TableCell>




//                                     </TableRow>

//                                 );
//                             }
//                                 )}






//                         </TableBody>
//                     </Table>
//                     <TablePagination
//                         rowsPerPageOptions={[10, 25, 100]}
//                         component="div"
//                         count={playedGames.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onChangePage={handleChangePage}
//                         onChangeRowsPerPage={handleChangeRowsPerPage}
//                     />
//                 </TableContainer>
//             </div>

//             <Modal open={open} close={handleClose} />


//             <div className={classes.addButton}>
//                 <Fab color="primary" align="left" aria-label="add" onClick={handleOpen}>
//                     <AddIcon />
//                 </Fab>
//             </div>
//         </div>
//     );
// }


//  export default TableList

import React from 'react';
import { forwardRef, useEffect, alert } from 'react';
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


const TableList = () => {
    const [playedGames, setPlayedGames] = React.useState([])
    
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
            field: 'name',
            render:(rowData) => rowData.data.name
        },
        {
            title: 'Date',
            field: 'date',
            render: (rowData) => { return new Date(rowData.data.date._seconds * 1000).toLocaleString('en-US', { month: 'long', weekday: 'long', day: 'numeric' }) }
        },
        {
            title: 'Players',
            field: 'players',
            render: (rowData) => ` ${rowData.data.players}  `
        },
        {
            title: 'Winners',
            field: 'winners',
            render: (rowData) => ` ${rowData.data.winners}  `
        },
        {
            title: 'Notes',
            field: 'notes',
            render: (rowData) => rowData.data.notes
        },
    ];






    return (
        <MaterialTable
           
             icons={tableIcons}
            columns={columns}
             data={playedGames}
            title="Demo Title"
            editable={{
               onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                      setTimeout(() => {
                          const dataDelete = [...playedGames];
                          const index = oldData.tableData.id;
                        //    console.log(oldData.tableData.date)
                        Axios.delete(`/api/gamesplayed/${oldData.id}`)
                            .then(res => {
                          console.log(oldData.id)
                         console.log(res);
                           console.log(res.data);
                        })
                      dataDelete.splice(index, 1);
                      setPlayedGames([...dataDelete]);
        
                      resolve();
                    }, 1000)
                  }),
              }}
        />
    );
}

export default TableList
