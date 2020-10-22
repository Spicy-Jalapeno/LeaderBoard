import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import Dropdown from './reusable/Dropdown'
import useStore from '../store';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  nav: {
    marginTop: "15px",
    padding: "10px",
    alignItems: "center",
    // backgroundColor: "aliceblue",

  },
  logo: {
    marginLeft: "1em",
    flexGrow: 10
  },
  item: {
    marginRight: "1em"
  }
})


const Nav = (props) => {
  const [clickedApps, setClickedApps] = useState(false)
  const [clickedAdd, setClickedAdd] = useState(false)
  const classes = useStyles()
  const fetch = useStore(state => state.fetchGames)
  const games = useStore(state => state.games)
  // const handleClick = (event) => {
  //   console.log(event.target)
  //   if (event.target.id === "add") {
  //     console.log("here")
  //     setClickedAdd(!clickedAdd)
  //   } else {
  //     setClickedApps(!clickedApps)
  //   }
  // }

  useEffect(() => {
    fetch();
  }, [])

  console.log(games)
  return (
    <>
      <Grid container direction="row" className={classes.nav}>
        <Grid item className={classes.logo}>
          <Typography>LeaderBoard</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <IconButton onClick={() => setClickedApps(!clickedApps)} id="apps">
            <AppsIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.item}>
          <IconButton onClick={() => setClickedAdd(!clickedAdd)} id="add">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div style={{ position: "relative" }}>
        {clickedApps ? <Dropdown clicked={clickedApps} games={games} /> : null}
      </div>
    </>
  );
}

export default Nav;