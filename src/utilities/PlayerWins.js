import useStore from '.././store'


const PlayersWins = (data) =>{
    let wins = []
    data.map(player =>{ 
        wins.push({name: player.data.firstName, wins: player.data.totalWins})
    })
    useStore.setState({playersWins:wins})
}

export default PlayersWins