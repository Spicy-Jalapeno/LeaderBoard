import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

const useStyles = makeStyles({
    root: {
        padding: "10px",
        marginTop: "20px",
        minHeight: "100px",
        minWidth: "200px",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.35)",
        borderRadius: "30px"
    },
    leftContainer: {
        minWidth: "70%",
        maxHeight: "80%",
       
    },
    rightContainer: {
        minWidth: "30%",
    },
})

const StatCard = ({number, title, icon}) => {
    const classes = useStyles()
    return ( 
        <Grid container direction="row" className={classes.root}>
           <Grid item className={classes.leftContainer}>
               <Grid container direction="column" justify="center"  style={{width: "100%", height: "100%", marginLeft: "10px"}}>
                    <Grid item>
                        <Typography style={{fontSize: "1.5rem"}}>{number}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{fontSize: ".8rem"}}>{title}</Typography>
                    </Grid>
               </Grid>
           </Grid>
           <Grid item className={classes.rightContainer}>
               <Grid container direction="column" justify="center" alignContent="center" style={{width: "100%", height: "100%"}}>
                    <VideogameAssetIcon style={{fontSize: "50px"}}/>
               </Grid>
           </Grid>
        </Grid> 
    );
}
 
export default StatCard;