import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles({
    root: {
        padding: "10px",
        marginTop: "20px",
        minHeight: "100px",
        minWidth: "300px",
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
        boxShadow: "26px 26px 52px #d9d9d9, -26px -26px 52px #ffffff",
        borderRadius: "30px",
        flexDirection:'row'
    },
    leftContainer: {
        minWidth: "60%",
        maxHeight: "80%",
       
    },
    rightContainer: {
        minWidth: "40%",
        // backgroundColor: "red"
    },
    // leftContent: {    
    // minHeight: "100%",
    // backgroundColor: "green"
    // }
    avatar:{
       width:'70px',
       height:'70px',
       
    },
})

const StatCard = ({number, title, icon}) => {
    const classes = useStyles() 
  
    return ( 
        <Grid container direction="row" className={classes.root}>
           <Grid item className={classes.leftContainer}>
               <Grid container direction="column" justify="center"  style={{width: "100%", height: "100%", marginLeft: "10px"}}>
                    <Grid item>
                        <Typography style={{fontSize: ".8rem"}}>{title}</Typography>
                    </Grid> 
                    <Grid item>
                        <Typography style={{fontSize: "1.5rem"}}>{number}</Typography>
                    </Grid>
                   
               </Grid>
           </Grid>
           <Grid item className={classes.rightContainer}>
               <Grid container direction="column" justify="center" alignContent="center" style={{width: "100%", height: "100%"}}>
                    {/* <VideogameAssetIcon style={{fontSize: "50px"}}/> */}
                    <Avatar className={classes.avatar} src={icon} /> 
               </Grid>
           </Grid>
        </Grid> 
    );
}
 
export default StatCard;