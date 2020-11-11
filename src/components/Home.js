import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, useMediaQuery, ThemeProvider, createMuiTheme, Paper, CssBaseline, Button } from '@material-ui/core';
import PlayerWinsBarChart from './PlayerWinsBarChart'
import StatCardContainer from './StatCardContainer';
import GameDistributionPieChart from './GameDistributionPieChart'
import GamePlayedForm from './GamePlayedForm';
import useStore from '../store'

const useStyles = makeStyles({
	graphContainers: {
		display: "flex",
		maxHeight: "20%", 
		marginLeft: "50px", 
		// marginTop: "15px"
	},
	graphs: {
		display: "flex",
		minHeight: "90%", 
		alignItems: "center", 
		justifyContent: "center"
	},
	bottomRow: {
		minHeight: "30vh", 
		// marginTop: "50px"
	},
	middleRow: {
		// marginTop: "25px",
		maxHeight: "30vh"
	},
	card: {
		boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.35)",
		borderRadius: "30px",
		backgroundColor: "#333",
		// maxHeight: "30vh"
	},
	darkMode: {
		backgroundColor: "#424242",
		color: "white",
		height: "100vh", 
		overflowX: "hidden", 
		overflowY: "hidden"
	},
	lightMode: {
		height: "100vh", 
		overflowX: "hidden", 
		overflowY: "hidden",
		backgroundColor: "white"
	}
})


const Home = (props) => {
	//set state for games
	const [homeData, setHomeData] = useState({ games: [], sessions: [], players: [] });
	const darkMode = useStore(state => state.darkMode)
	const setDarkMode = useStore(state => state.setDarkMode)
	const darkTheme = createMuiTheme({
		palette: {
			type: "dark"
		}
	})
	const theme = darkMode ? darkTheme : null
	
	

	const classes = useStyles();

	const handleThemeChange = () => {
		useStore.setState({ darkMode: !darkMode})
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
			setHomeData({ games: games.data, sessions: sessions.data, players: players.data });
		};
		//call fetch function
		fetch()
	}, []);
	console.log(darkMode)

	return (
		<div className={darkMode ? classes.darkMode : classes.lightMode}>
			<Grid container style={{height: "100%", paddingLeft: "50px", paddingRight: "50px"}} spacing={4}>
				<Grid item xs={12} container justify="space-between">
					<Grid item>
						<Typography variant="h4">LeaderBoard</Typography>
					</Grid>
					<Grid item>
						<Button onClick={handleThemeChange}>Change theme</Button>
					</Grid>
				</Grid>
					<Grid item xs={12} container style={{marginTop: "50px"}}>
						<Grid item xs={12}>
							<StatCardContainer />
						</Grid>
					</Grid>
					<Grid item xs={12} container className={classes.middleRow} spacing={2}>
						<Grid item xs={12} sm={12} md={7} container className={classes.card}>
							<Grid item xs={12} className={classes.graphContainers}>
								<Typography>Top 5 Players Wins</Typography>
							</Grid>
							<Grid item xs={12} className={classes.graphs}>
								<PlayerWinsBarChart data={homeData.players} />
							</Grid>
						</Grid>
						<Grid item sm={1} />
						<Grid item xs={12} sm={12} md={4} container className={classes.card}>
							<Grid item xs={12} className={classes.graphContainers}>
								<Typography>Total Game Distribution</Typography>
							</Grid>
							<Grid item xs={12} className={classes.graphs}>
								<GameDistributionPieChart data={homeData.sessions}/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} container className={classes.bottomRow} justify="space-evenly" spacing={5}>
						<Grid item xs={12} sm={3} className={classes.card} container direction="column" alignContent="center">
							<Grid item>
								<Typography>Players</Typography>
							</Grid>
							{homeData.players.map(player => {
								return (
									<Grid item>
										<Typography>{player.data.firstName}</Typography>
									</Grid>
								)
							})}
						</Grid>
						<Grid item xs={12} sm={3} className={classes.card} container direction="column" alignContent="center" justify="center">
							<GamePlayedForm />
						</Grid>
						<Grid item xs={12} sm={3} className={classes.card}>						
							<Typography>test3</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
	)
};

export default Home;
