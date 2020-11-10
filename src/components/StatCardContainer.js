import React from 'react';
import { Grid } from "@material-ui/core";
import StatCard from './reusable/StatCard'

const titles = ["Games Played", "Most Played Game", "Leader"]

const StatCardContainer = (props) => {
    return ( 
        <Grid container direction="row" justify="space-evenly" alignContent="center" spacing={4}>
            {titles.map(title => {
                return (
                    <Grid item xs={10} sm={6} md={2}>
                        <StatCard title={title} number={"100"} />
                    </Grid>
                )
            })}
        </Grid>
     );
}
 
export default StatCardContainer;