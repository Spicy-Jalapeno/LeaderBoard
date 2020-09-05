import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import TableList from './TableList';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
	container: {
		height: '100%'
		// width: '100%',
		// height: '20%',
		// overflow: 'hidden',
		// backgroundColor: 'red'
	},
	media: {
		maxHeight: '200px',
		maxWidth: '250px',
		marginTop: '25px',
		minHeight: '100px',
		minWidth: '200px'
	}
});

const TableSection = ({ game, id, name }) => {
	const classes = useStyles();
	return (
		<Grid id={id} container direction="column" alignItems="center" className={classes.container}>
			<Grid item>
				{name ? (
					<img src={`./assets/${name}.png`} className={classes.media} alt={`${name} logo`} />
				) : (
					<Typography>No game selected!</Typography>
				)}
			</Grid>
			<Grid item>
				<TableList game={game} />
			</Grid>
		</Grid>
	);
};

export default TableSection;
