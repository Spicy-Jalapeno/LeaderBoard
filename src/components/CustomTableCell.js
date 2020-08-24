import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function CustomTableCell(props) {
    return (<TableRow>
        <TableCell align='left'>{props.name}</TableCell>
        <TableCell align='left'>{props.date}</TableCell>
        <TableCell align='left'>{props.players}</TableCell>
        <TableCell align='left'>{props.winners}</TableCell>
        <TableCell align='left'>{props.notes}</TableCell>
        <TableCell align='left'>{props.valid}</TableCell>
        </TableRow>
)
}


export default CustomTableCell;
