import React from 'react';
import { Grid } from "@material-ui/core";
import StatCard from './reusable/StatCard'

const titles = ["Games Played", "Most Played Game", "Leader"]

const StatCardContainer = (props) => {
    return ( 
        <Grid container direction="row" justify="center" alignContent="center" spacing={5}>
            {titles.map(title => {
                return (
                    <Grid item>
                        <StatCard title={title} number={"100"} />
                    </Grid>
                )
            })}
        </Grid>
     );
}
 
export default StatCardContainer;