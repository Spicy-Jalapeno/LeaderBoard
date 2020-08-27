import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minWidth: '150px',
		minHeight: '100px',
		maxWidth: "150px",
		maxHeight: '100px',
		boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.15)',
		// backgroundColor: "blue"
	},
	logo: {
		maxHeight: '100px',
		maxWidth: '125px'
	}
});


const GameCard = ({ title, id, childVariants }) => {
	const classes = useStyles();
	return (
		<motion.div id={id} whileHover={{ scale: 1.1, }} whileTap={{ scale: 0.9 }}>
			<Card className={classes.card}>
				<motion.img
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className={classes.logo}
					src={`./assets/${title}.png`}
					alt={`${title} logo`}
				/>
			</Card>
		</motion.div>
	);
};

export default GameCard;
