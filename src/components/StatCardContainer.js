import React from 'react';
import { Grid } from "@material-ui/core";
import StatCard from './reusable/StatCard'
import useStore from '../store'



const StatCardContainer = (props) => {
    let mostPlayed; 
    let leader; 
    let totalNumOfGames = 0; 
    const totalSessions = useStore(state => state.totalSessions)
    const playerWins = useStore(state => state.playersWins)
    const cards = [];
    if(totalSessions.length !=0 && playerWins.length !=0){
    mostPlayed = totalSessions.reduce(function(prev, current) {
        return (prev.played > current.played) ? prev : current
    })
    leader = playerWins.reduce((prev,current) => { 
        return(prev.wins>current.wins) ? prev : current
    })
    let temp = 0; 
    totalSessions.forEach( session => {
        totalNumOfGames = temp + session.played
         temp = totalNumOfGames
    });
    
   
    cards.push({title:'Most Played Game',number:mostPlayed.played,pic:`./assets/${mostPlayed.name}.png`})
    cards.push({title:'Leader',number:leader.wins,pic:`./assets/${leader.name}.png`})
    cards.push({title:'Games Played',number:totalNumOfGames,pic:`./assets/Matt.png`})

}   
    console.log(mostPlayed);
    console.log(totalNumOfGames);
    console.log(leader);
    return ( 
        <Grid container direction="row" justify="center" alignContent="center" spacing={5}>
            {cards.map(card => {
                return (
                    <Grid  item key={card.title}>
                        <StatCard title={card.title}  number={card.number} icon={card.pic} />
                    </Grid>
                )
            })}
        </Grid>
     );
}
 
export default StatCardContainer;