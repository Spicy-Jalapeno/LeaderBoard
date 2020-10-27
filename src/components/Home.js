import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import PlayerTable from './PlayerTable'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import TableSection from './TableSection';

import StatCardContainer from './StatCardContainer';


const useStyles = makeStyles({
	rootContainer: {
		height: "100vh",
		width: "100vw",
	},
	rightContainer: {
		height: '100vh',
		width: '85vw',
		overflowX: "hidden", 
	},
	leftContainer: {
		height: "100vh",
		width: "15vw",
		backgroundColor: "green"
	},
	container: {
		marginTop: '25px'
	},
	text: {
		textAlign: 'center',
	},
	size: {
		fontSize: '3rem'
	},
	gamesContainer: {
		maxWidth: "70vw"
	},
	square: {
		position: "absolute",
		backgroundColor: "lightblue",
		zIndex: -1
	},
	list: {
		width: "80%",
		marginTop: "50px",
		maxHeight: "30%"
	}
});


const Home = (props) => {
	//set state for games\
	const isActive = useMediaQuery("(max-width: 375px)")
	const [homeData, setHomeData] = useState({ games: [], sessions: [], players: [] });
	const [singleGameData, setSingleGameData] = useState([])
	const [gameName, setGameName] = useState('')
	const [clicked, setClicked] = useState(false)

	const classes = useStyles();

	const handleClick = async (event) => {
		setClicked(true)
		event.target.tagName === "DIV" ? setGameName(event.target.title) : setGameName(event.target.alt)
		const { data } = await Axios.get(`/api/playedgames/${event.target.alt}`)
		setSingleGameData(data)

	}

	//useEffect will run on componentMount, anything in here will be called when page loads/reloads/updates
	useEffect(() => {
		scroll.scrollToTop({ duration: 200 })
		//since useEffect can't be async itself, you have to define an async fuction and call
		//it inside useEffect. This function will hit our api and retrieve the list of games
		//in the db
		const fetch = async () => {
			//I used destructuring here because I knew there was a data object attached to the response
			//just for readability. Axios is a HTTP client that returns a promise
			const games = await Axios.get('/api/games');
			const sessions = await Axios.get('/api/playedgames');
			const players = await Axios.get('/api/players')
			//setting state for the new data retrieved
			setHomeData({ games: games.data, sessions: sessions.data, players: players.data });
		};
		//call fetch function
		// fetch();

	}, []);

	return (
		<>
			<Grid container direction="row" alignItems="center" className={classes.rootContainer} >
				<Grid item className={classes.leftContainer}>
					<Grid container direction="column">

					</Grid>
				</Grid>
				<Grid item className={classes.rightContainer}>
					<Grid container direction="column">
						<Grid item style={{marginTop: "5rem"}}>
							<StatCardContainer />
						</Grid>
						<Grid item>
							<Chart chartType='bar' aggType='month' title='Game Session Volume by Month' data={homeData.sessions}></Chart>
						</Grid>
						<Grid item>
							<Chart chartType='bar' aggType='player' title='Top Players by Win Percentage' data={homeData.players}></Chart>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
