import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'

const games = ['1', '2', '3', '4']
const useStyles = makeStyles({
    container: {
        position: "absolute",
        top: 5,
        right: 45,
        zIndex: 10,
        width: "300px",
        height: "300px",
        backgroundColor: "aliceblue"
    },

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
            staggerChildren: 0.5
        }
    }
}
const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const Dropdown = () => {
    const classes = useStyles()
    return (
        <motion.Grid container direction="column" className={classes.container} variants={variants} initial="hidden" animate="show">
            <motion.Grid item variants={item}><Typography>test</Typography></motion.Grid>
            <motion.Grid item variants={item}><Typography>test</Typography></motion.Grid>
            <motion.Grid item variants={item}><Typography>test</Typography></motion.Grid>

        </motion.Grid>
    );
}

export default Dropdown;