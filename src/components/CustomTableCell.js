import React from 'react';
import { TableRow, TableCell } from '@material-ui/core'


const CustomTableCell = (props) => {

    return (
        <TableRow>
            <TableCell align='left'>{props.name}</TableCell>
            <TableCell align='left'>{props.date}</TableCell>
            <TableCell align='left'>{props.players.map(name => `${name} `)}</TableCell>
            <TableCell align='left'>{props.winners.map(name => `${name} `)}</TableCell>
            <TableCell align='left'>{props.notes}</TableCell>

        </TableRow>
    )
}


export default CustomTableCell;
