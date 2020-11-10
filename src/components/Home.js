import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import PlayerWinsBarChart from './PlayerWinsBarChart'
import StatCardContainer from './StatCardContainer';
import GameDistributionPieChart from './GameDistributionPieChart'
import GamePlayedForm from './GamePlayedForm';

const useStyles = makeStyles({
	graphContainers: {
		display: "flex",
		maxHeight: "20%", 
		marginLeft: "50px", 
		marginTop: "15px"
	},
	graphs: {
		display: "flex",
		minHeight: "90%", 
		alignItems: "center", 
		justifyContent: "center"
	},
	bottomRow: {
		minHeight: "35vh", 
		marginTop: "50px"
	},
	middleRow: {
		marginTop: "50px"
	},
	card: {
		boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.35)",
		borderRadius: "30px"	
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
			setHomeData({ games: games.data, sessions: sessions.data, players: players.data });
		};
		//call fetch function
		fetch()
	}, []);

	return (
		<>
			<Grid container direction="column" justify="center" alignItems="center" spacing={4}>
				<Grid item xs={12} container justify="space-between">
					<Grid item>
						<Typography variant="h4">LeaderBoard</Typography>
					</Grid>
					<Grid item>
						<Typography>test top</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} container style={{ marginTop: "100px"}}>
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
					<Grid item xs={12} sm={3} className={classes.card} container direction="column">
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
					<Grid item xs={12} sm={3} className={classes.card}>
						<GamePlayedForm />
					</Grid>
					<Grid item xs={12} sm={3} className={classes.card}>						
						<Typography>test3</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
