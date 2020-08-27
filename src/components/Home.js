import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import List from './List'
import { Link, animateScroll as scroll } from 'react-scroll'


const useStyles = makeStyles({
	mainContainer: {
		height: '100vh',
		width: '100vw'
	},
	container: {
		marginTop: '100px'
	},
	text: {
		textAlign: 'center'
	},
	gamesContainer: {
		maxWidth: "70vw"
	}
});

const Section = ({ color, id }) => {
	return <div id={id} style={{ height: "100vh", width: "100vw", backgroundColor: color }}></div>
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

	return (
		<>
			<Grid className={classes.mainContainer} container direction="column" alignContent="center" spacing={2} style={{ backgroundColor: "lightblue" }}>
				<Grid item className={classes.text}>
					<Typography variant="h1">LeaderBoard</Typography>
				</Grid>
				<Grid item className={classes.container}>
					<Grid container className={classes.gamesContainer} direction="row" justify="space-evenly" spacing={2}>
						{games.map((game) => {
							return (
								<Grid item>
									<GameCard title={game.name} />
								</Grid>
							);
						})}
						{/* <Link activeClass="active" to="test2" spy={true} smooth="true" offset={0} duration={1000}>
							test
						</Link> */}
					</Grid>
				</Grid>
				<Grid item>
					<List />
				</Grid>
			</Grid>

		</>
	);
};

export default Home;
