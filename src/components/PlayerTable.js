import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: '100%'
	}
});

const PlayerTable = ({ data, type }) => {
	const classes = useStyles();
	return (
		<TableContainer id="link" component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Wins</TableCell>
						<TableCell align="right">Losses</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<TableRow key={item.firstName}>
							<TableCell component="th" scope="row">
								{item.firstName}
							</TableCell>
							<TableCell align="right">{item.totalWins}</TableCell>
							<TableCell align="right">{item.totalLosses}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default PlayerTable
