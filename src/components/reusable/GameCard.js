import React from 'react';
import { motion } from 'framer-motion';
import { Card, makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
	cardBig: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '125px',
		minHeight: '75px',
		maxWidth: '150px',
		maxHeight: '100px',
		boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.10)'
		// backgroundColor: "blue"
	},
	cardSmall: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '70px',
		minWidth: '75px',
		boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.10)'
	},
	logo: {
		maxHeight: '75px',
		maxWidth: '100px'
	},
	logoSmall: {
		maxHeight: '40px',
		maxWidth: '60px'
	}
});

const GameCard = ({ title, id, childVariants }) => {
	const isActive = useMediaQuery('(max-width: 375px)');
	const classes = useStyles();
	return (
		<motion.div id={id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			<Card className={isActive ? classes.cardSmall : classes.cardBig} title={title}>
				<motion.img
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className={isActive ? classes.logoSmall : classes.logo}
					src={`./assets/${title}.png`}
					alt={`${title}`}
				/>
			</Card>
		</motion.div>
	);
};

export default GameCard;
