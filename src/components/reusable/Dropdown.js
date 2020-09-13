import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../../store'
import GameCard from './GameCard';

const games = ['1', '2', '3', '4']
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        position: "absolute",
        top: 5,
        right: 45,
        zIndex: 10,
        width: "300px",
        height: "300px",
        // backgroundColor: "aliceblue",
        border: '0.01px solid gray',
        overflowY: "scroll",
        borderRadius: "5px",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.10)"
    },
    item: {
        maxHeight: "50%",
        maxWidth: "50%",
        minHeight: "45%",
        minWidth: "45%",
        margin: "5px"
        // backgroundColor: "blue"
    }

})

const variants = {
    hidden: {
        height: "0px",
        width: "0px",
        opacity: 0
    },
    show: {
        opacity: 1,
        height: "200px",
        width: "300px",
        transition: {
            staggerChildren: 0.08
        }
    },

}
const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const Dropdown = ({ clicked, games }) => {
    const classes = useStyles()
    const updateCount = useStore(state => state.updateCounter)
    console.log(games)
    return (
        <motion.div className={classes.container} variants={variants} initial="hidden" animate="show" >
            {games.map(game => {
                return (
                    <motion.div className={classes.item} variants={item}>
                        <GameCard title={game.name} />
                    </motion.div>
                )
            })}
        </motion.div>
    );
}

export default Dropdown;