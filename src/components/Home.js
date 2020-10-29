import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import PlayerTable from './PlayerTable'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import TableSection from './TableSection';
import Chart from './Chart'

import StatCardContainer from './StatCardContainer';


// const useStyles = makeStyles({
// 	rootContainer: {
// 		height: "100vh",
// 		width: "100vw",
// 	},
// 	rightContainer: {
// 		height: '100vh',
// 		width: '85vw',
// 		overflowX: "hidden",
// 	},
// 	leftContainer: {
// 		height: "100vh",
// 		width: "15vw",
// 		backgroundColor: "green"
// 	},
// 	container: {
// 		marginTop: '25px'
// 	},
// 	text: {
// 		textAlign: 'center',
// 	},
// 	size: {
// 		fontSize: '3rem'
// 	},
// 	gamesContainer: {
// 		maxWidth: "70vw"
// 	},
// 	square: {
// 		position: "absolute",
// 		backgroundColor: "lightblue",
// 		zIndex: -1
// 	},
// 	list: {
// 		width: "80%",
// 		marginTop: "50px",
// 		maxHeight: "30%"
// 	},
// 	nav: {

// 	}
// });

const useStyles = makeStyles({
	root: {},
	graphContainer: {
		minHeight: "400px",
		minWidth: "100%",
		marginTop: "60px",
		backgroundColor: "lightgreen",
	},
	leftGraph: {
		minHeight: "100%",
		marginRight: "30px",
		padding: "40px 40px",
		borderRadius: "30px",
		backgroundColor: "aliceblue"
	},
	rightGraph: {
		minHeight: "100%",
		borderRadius: "30px",
		padding: "40px 40px",
		backgroundColor: "aliceblue"
	},
	playersContainer: {
		// minHeight: "100%", 
		backgroundColor: "red",
		borderRadius: "30px",
		// padding: "40px 40px",
		// marginRight: "30px"
	},
	formContainer: {
		// minHeight: "100%",
		// backgroundColor: "red",
		borderRadius: "30px",
		// padding: "40px 40px",
		// marginRight: "30px"
	}
})


const Home = (props) => {
	//set state for games
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
			console.log(sessions)
			setHomeData({ games: games.data, sessions: sessions.data, players: players.data });
		};
		//call fetch function
		fetch();
		

	}, []);

	return (
		<>
			  {/* <Grid container direction="row" alignItems="center" className={classes.rootContainer} > */}
				{/* <Grid item className={classes.leftContainer}>
					<Grid container direction="column">

					</Grid>
				</Grid> */}
				{/* <Grid item className={classes.rightContainer}>
					<Grid container direction="column" alignContent="center">
						<Grid item style={{marginTop: "5rem"}}>
							<StatCardContainer />
						</Grid>
						<Grid item>
							// <Chart chartType='bar' aggType='month' title='Game Session Volume by Month' data={homeData.sessions}></Chart>
						</Grid>
						<Grid item>
							<Chart chartType='bar' aggType='player' title='Top Players by Win Percentage' data={homeData.players}></Chart>
						</Grid>
					</Grid>
				</Grid> */}
			{/* </Grid> */}

			<Grid container>
				<Grid item xs={12}>
					<Grid container direciton="row" justify="space-between">
						<Grid item>
							<Typography>test l</Typography>
						</Grid>
						<Grid item>
							<Typography>test r</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} style={{display: "flex", flexDirection: "row", alignContent: "center", marginTop: "50px"}}>
					<StatCardContainer />
				</Grid>
				<Grid item xs={12}>
					<Grid container direction="row" className={classes.graphContainer} spacing={3} justify="center">
						<Grid item xs={12} md={8} lg={8} className={classes.leftGraph}>
							<Chart  chartType='bar' aggType='player' title='Game Session Volume by Month' data={homeData.players}></Chart>
						</Grid>
						<Grid item xs className={classes.rightGraph}>
							<Typography>test2</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container direction="row" justify="center" className={classes.graphContainer} spacing={4}>
						<Grid item xs={12} sm={4} md={4} lg={4}>
							<Typography style={{height: "100px", width: "100%", backgroundColor: "red"}}>test left</Typography>
						</Grid>
						<Grid item xs={12} sm={4} md={4} lg={4} className={classes.formContainer}>
							<Typography style={{height: "100px", width: "100%", backgroundColor: "red"}}>test middle</Typography>
						</Grid>
						<Grid item xs={12} sm={4} md={4} lg={4}>
							<Typography style={{height: "100px", width: "100%", backgroundColor: "red"}}>test right</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
