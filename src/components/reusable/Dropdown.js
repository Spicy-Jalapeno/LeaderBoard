import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../../store'

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
        backgroundColor: "aliceblue",
        overflowY: "scroll"
    },
    item: {
        maxHeight: "50%",
        maxWidth: "50%",
        minHeight: "45%",
        minWidth: "45%",
        backgroundColor: "blue"
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

const Dropdown = ({ clicked }) => {
    const classes = useStyles()
    // console.log(props)
    const test = useStore(state => state.test)
    const updateCount = useStore(state => state.updateCounter)
    console.log(test)
    return (
        <motion.div className={classes.container} variants={variants} initial="hidden" animate="show" >
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <motion.div className={classes.item} variants={item}><Typography>test</Typography></motion.div>
            <Button onClick={updateCount}>click</Button>
        </motion.div>
    );
}

export default Dropdown;