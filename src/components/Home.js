import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Grid, Typography, makeStyles, useMediaQuery } from '@material-ui/core';
import GameCard from './reusable/GameCard';
import PlayerTable from './PlayerTable'
import { Link, animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'
import TableSection from './TableSection';
import TableList from './TableList'


const useStyles = makeStyles({
	homeContainer: {
		height: '100vh',
		width: '100vw',
		// backgroundColor: "red",
		// overflowY: "scroll"
		// overflowX: "none", 
		// backgroundColor: "red"
		// postiion: "relaive"
	},
	rootContainer: {
		height: "100vh",
		width: "100vw",
		// backgroundColor: "red"
		// overflowX: 
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
	const [homeData, setHomeData] = useState({ games: [], players: [] });
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
			const players = await Axios.get('/api/players')
			//setting state for the new data retrieved
			setHomeData({ games: games.data, players: players.data });
		};
		//call fetch function
		// fetch();

	}, []);

	return (
		<>
			<Grid container direction="row" alignItems="center" className={classes.rootContainer} >
				<Grid item className={classes.homeContainer}>
					<Grid container direction="column" alignItems="center" spacing={2} id="test2"  >
						{/* <Grid item xs={12}>
							<Typography variant="h1" className={isActive ? classes.size : null}  >LeaderBoard</Typography>
						</Grid> */}
						{/* <Grid item className={classes.container}>
							<Grid container className={classes.gamesContainer} direction="row" justify="space-evenly" spacing={2}>
								{homeData.games.map((game) => {
									return (
										<Grid item key={game.name} xs={4} s={2} md={2} lg={2} xl={2}>
											<Link activeClass="active" to="test1" spy={true} smooth="true" duration={1000} onClick={handleClick}>
												<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
													<GameCard title={game.name} />
												</motion.div>
											</Link>
										</Grid>
									);
								})}
							</Grid>
						</Grid> */}
						<Grid item className={classes.list} >
							{/* some sort of loading wheel maybe */}
							{/* <PlayerTable data={homeData.players} /> */}
						</Grid>
					</Grid>
				</Grid>
				<Grid item >
					{clicked ? <TableSection game={singleGameData} name={gameName} id="test1" /> : null}
				</Grid>
			</Grid>
		</>
	);
};

export default Home;
