import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		minWidth: '300px',
		minHeight: '100px',
		boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.15)'
	},
	logo: {
		height: '100px',
		width: '250px'
	}
});

const GameCard = ({ title }) => {
	const classes = useStyles();
	return (
		<motion.div inital="hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			<Card className={classes.card}>
				<CardContent>
					<Grid container direction="column" alignItems="center">
						<Grid item>
							<motion.img
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className={classes.logo}
								src={`./assets/${title}.png`}
								alt={`${title} logo`}
							/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default GameCard;
