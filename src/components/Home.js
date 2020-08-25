import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, Card, CardContent, makeStyles, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		marginTop: "100px"
	},
	logo: {
		height: "100px",
		width: "250px"
	},
	card: {
		minWidth: "300px",
		minHeight: "100px",
		boxShadow: "0px 20px 10px rgba(0, 0, 0, 0.15)"
	},
	text: {
		textAlign: "center"
	}
})

const Home = (props) => {
	//set state for games
	const [games, setGames] = useState([]);
	const [players, setPlayers] = useState([]);
	const classes = useStyles()
	//useEffect will run on componentMount, anything in here will be called when page loads/reloads/updates
	useEffect(() => {
		//since useEffect can't be async itself, you have to define an async fuction and call
		//it inside useEffect. This function will hit our api and retrieve the list of games
		//in the db
		const fetch = async () => {
			//I used destructuring here because I knew there was a data object attached to the response
			//just for readability. Axios is a HTTP client that returns a promise
			const games = await Axios.get('/api/games');
			const players = await Axios.get('/api/players');
			//setting state for the new data retrieved
			console.log(games);
			console.log(players);
			setGames(games.data);
			setPlayers(players.data);
		};
		//call fetch function
		// fetch();
	}, []);

	//this component doesn't really do much but display the names of the games right now
	// if (games.length > 0) {
	// 	return <div>{games.map((game) => <div key={game.name}>{game.name}</div>)}</div>;
	// } else {
	// 	return <div>no games</div>;
	// }
	return (
		<Grid container direction="column" alignContent="center">
			<Grid item className={classes.text}>
				<Typography variant="h1">LeaderBoard</Typography>
			</Grid>
			<Grid item className={classes.container}>
				<Grid container direction="row" justify="space-evenly" spacing={2} >
					<Grid item>
						<Card className={classes.card}>
							<CardContent>
								<Grid container direction="column" alignItems="center">
									<Grid item>
										<img className={classes.logo} src="./assets/mysterium.png" />
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
};

export default Home;
