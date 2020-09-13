import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import GameCard from "./reusable/GameCard";
import Dropdown from './reusable/Dropdown'
import useStore from '../store';
import { SatelliteSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  nav: {
    marginTop: "15px",
    padding: "10px",
    alignItems: "center",
    backgroundColor: "aliceblue",

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
  const [clicked, setClicked] = useState(false)
  const classes = useStyles()
  const fetch = useStore(state => state.fetchGames)
  const games = useStore(state => state.games)
  const handleClick = () => {
    setClicked(!clicked)
  }
  useEffect(() => {
    fetch();
  }, [])

  console.log(games)
  return (
    <>
      <Grid container direction="row" className={classes.nav}>
        <Grid item className={classes.logo}>
          <Typography>logo</Typography>
        </Grid>
        <Grid item className={classes.item}><Typography>test</Typography></Grid>
        <Grid item className={classes.item}><Typography>test</Typography></Grid>
        <Grid item className={classes.item}>
          <IconButton onClick={handleClick}>
            <AppsIcon />
          </IconButton>
        </Grid>

      </Grid>
      <div style={{ position: "relative" }}>
        {clicked ? <Dropdown clicked={clicked} games={games} /> : null}
      </div>
    </>
  );
}

export default Nav;