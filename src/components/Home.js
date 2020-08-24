import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Divider } from '@material-ui/core';




const Home = (props) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await Axios.get('/api/games')
            console.log(data)
            setGames(data)
        }
        fetch()
    }, [])

    console.log(games)
    if (games.length > 0) {
        return (
            <div>
                {games.map(game => <div key={game.name}>{game.name}</div>)}
            </div>
        );
    } else {
        return <div>no games</div>
    }
}

export default Home;