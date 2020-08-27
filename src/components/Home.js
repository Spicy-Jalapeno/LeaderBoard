import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import GameCard from './reusable/GameCard';

const useStyles = makeStyles({
	container: {
		marginTop: '100px'
	},
	text: {
		textAlign: 'center'
	}
});

const Home = (props) => {
	//set state for games
	const [ games, setGames ] = useState([]);
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

	return (
		<Grid container direction="column" alignContent="center">
			<Grid item className={classes.text}>
				<Typography variant="h1">LeaderBoard</Typography>
			</Grid>
			<Grid item className={classes.container}>
				<Grid container direction="row" justify="space-evenly" spacing={2}>
					{games.map((game) => {
						return (
							<Grid item>
								<GameCard title={game.name} />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
