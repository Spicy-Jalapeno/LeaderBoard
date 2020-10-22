import React from 'react';
import { Grid } from "@material-ui/core";
import StatCard from './reusable/StatCard'

const titles = ["Games Played", "Most Played Game", "Leader"]

const StatCardContainer = (props) => {
    return ( 
        <Grid container direction="row" justify="center" alignContent="center" style={{ marginLeft: "100px", width: "80vw", height: "15vh"}} spacing={10}>
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