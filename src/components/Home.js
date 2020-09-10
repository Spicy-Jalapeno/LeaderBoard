import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import PlayerTable from './PlayerTable'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import GameDataTable from './GameDataTable';


const useStyles = makeStyles({
	mainContainer: {
		height: '100vh',
		width: '100vw'
	},
	container: {
		marginTop: '50px'
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
	},
	list: {
		width: "80%",
		marginTop: "100px",
		maxHeight: "30%"
	}
});

const handleClick = (event) => {
	console.log(event.target.alt)
}


const Home = (props) => {
	//set state for games
	const [homeData, setHomeData] = useState({ games: [], players: [] });
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
			const players = await Axios.get('/api/players')
			//setting state for the new data retrieved
			// players from the get method contains the id and players data in one array. 
			// this forEach seperates the data of players into an array playersData to use for the homeData array. 
			// Easier than refactoring everything. 
			let playersData = [];
			players.data.forEach(player => {
				console.log(player.data)
				playersData.push(player.data);
			})
			 setHomeData({ games: games.data, players: playersData });
			// console.log(players.data)
		};
		//call fetch function
		fetch();
	}, []);

	return (
		
		<>
			{/* <motion.div className={classes.square} initial={{ opacity: 0, x: -100, height: "0px", width: "0px" }} animate={{ height: "500px", width: "500px", x: -70, y: -150, opacity: 1, rotate: 70 }} transition={{ duration: 1 }} />
			<motion.div className={classes.square} initial={{ opacity: 0, x: 2000, y: 100, height: "0px", width: "0px" }} animate={{ height: "500px", width: "500px", x: window.innerWidth - 300, opacity: 1, rotate: -70 }} transition={{ duration: 1 }} /> */}
			<Grid className={classes.mainContainer} container direction="column" alignItems="center" spacing={2} >
				<Grid item className={classes.text} >
					<Typography variant="h1">LeaderBoard</Typography>
				</Grid>
				<Grid item className={classes.container}>
					<Grid container className={classes.gamesContainer} direction="row" justify="space-evenly" spacing={2}>
						{homeData.games.map((game) => {
							return (
								<Grid item key={game.name}>
									<Link activeClass="active" to="test1" spy="true" smooth="true" duration={1000} onClick={handleClick}>
										<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
											<GameCard title={game.name} />
										</motion.div>
									</Link>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item className={classes.list} >
					{/* some sort of loading wheel maybe */}
					<PlayerTable data={homeData.players} />
				</Grid>
			</Grid>
			<GameDataTable id="test1" />

		</>
	);
};

export default Home;
