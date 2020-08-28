import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import List from './List'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'


const useStyles = makeStyles({
	mainContainer: {
		height: '100vh',
		width: '100vw'
	},
	container: {
		marginTop: '100px'
	},
	text: {

		textAlign: 'center',

	},
	gamesContainer: {
		maxWidth: "70vw"
	},
	square: {
		position: "absolute",
		backgroundColor: "lightblue",
		zIndex: -1
	}
});

const parents = {
	loaded: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
}


const Home = (props) => {
	//set state for games
	const [games, setGames] = useState([]);
	const classes = useStyles();
	//useEffect will run on componentMount, anything in here will be called when page loads/reloads/updates
	useEffect(() => {
		//since useEffect can't be async itself, you have to define an async fuction and call
		//it inside useEffect. This function will hit our api and retrieve the list of games
		//in the db
		const fetch = async () => {
			//I used destructuring here because I knew there was a data object attached to the response
			//just for readability. Axios is a HTTP client that returns a promise
			const games = await Axios.get('/api/games');

			//setting state for the new data retrieved
			setGames(games.data);
		};
		//call fetch function
		fetch();
	}, []);
	console.log(window.innerWidth / 2)
	return (
		<>
			<motion.div className={classes.square} initial={{ opacity: 0, x: -100, height: "0px", width: "0px" }} animate={{ height: "500px", width: "500px", x: -70, y: -150, opacity: 1, rotate: 70 }} transition={{ duration: 1 }} />
			<motion.div className={classes.square} initial={{ opacity: 0, x: 2000, y: 100, height: "0px", width: "0px" }} animate={{ height: "500px", width: "500px", x: window.innerWidth - 300, opacity: 1, rotate: -70 }} transition={{ duration: 1 }} />
			<Grid className={classes.mainContainer} container direction="column" alignItems="center" spacing={2} >
				<Grid item className={classes.text} >
					<Typography variant="h1">LeaderBoard</Typography>
				</Grid>
				<Grid item className={classes.container}>
					<Grid container className={classes.gamesContainer} direction="row" justify="space-evenly" spacing={2}>
						{games.map((game) => {
							return (
								<Grid item>
									<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
										<GameCard title={game.name} />
									</motion.div>
								</Grid>
							);
						})}
						{/* <Link activeClass="active" to="test2" spy={true} smooth="true" offset={0} duration={1000}>
							test
						</Link> */}
					</Grid>
				</Grid>
				<Grid item style={{ width: "80%", marginTop: "100px" }}>
					<motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
						<List />
					</motion.div>
				</Grid>
			</Grid>

		</>
	);
};

export default Home;
