import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Home = (props) => {
	//set state for games
	const [ games, setGames ] = useState([]);
	const [ players, setPlayers ] = useState([]);

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
		fetch();
	}, []);

	//this component doesn't really do much but display the names of the games right now
	if (games.length > 0) {
		return <div>{games.map((game) => <div key={game.name}>{game.name}</div>)}</div>;
	} else {
		return <div>no games</div>;
	}
};

export default Home;
