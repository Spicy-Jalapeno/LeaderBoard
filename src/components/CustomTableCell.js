import React from 'react';
import { TableRow, TableCell } from '@material-ui/core'


const CustomTableCell = (props) => {

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={props.id}>
            <TableCell >{props.name}</TableCell>
            <TableCell >{props.date}</TableCell>
            <TableCell >{props.players.map(name => `${name} `)}</TableCell>
            <TableCell >{props.winners.map(name => `${name} `)}</TableCell>
            <TableCell >{props.notes}</TableCell>

        </TableRow>
    )
}


export default CustomTableCell;
