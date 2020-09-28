import { Modal as ModalTest, makeStyles, Card } from '@material-ui/core'
import React from 'react';
import GamePlayedForm from '../GamePlayedForm';
import GameCard from './GameCard';
import { motion } from 'framer-motion';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 20 + rand();
//     const left = 20 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

const useStyles = makeStyles({
    paper: {
        outline: 2,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) !important',
        margintop: '-50px',
        marginleft: '-50px',
        width: 900,
        height: 700,
        background: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        justifyContent:'space-around'
    },card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minWidth: '150px',
		minHeight: '100px',
		// maxWidth: "150px",
        maxHeight: '100px',
        height:'200px',
		// boxShadow: '0px 20px 10px rgba(0, 0, 0, 0.15)',
        // backgroundColor: "blue"
        boxShadow:'none'
    }, logo: {
        marginTop:'15px',
		maxHeight: '200px',
        maxWidth: '150px',
        justifyContent:'center'
	}
})


const Modal = (props) => {
    const classes = useStyles()
    // const [modalStyle] = useState(getModalStyle);style={modalStyle}
    const [selectedGame, setSelectedGame] = React.useState('bois');
    const body = (

        < div className={classes.paper}>
            <div style={{
                width: '50%',
                display: 'flex',
            flexDirection:'column'}}>
    <Card className={classes.card}>
				<motion.img
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
                    className={classes.logo}
					src={`./assets/${selectedGame}.png`}
					alt={`${selectedGame}`}
				/>
			</Card>
                </div>
            <GamePlayedForm setSelectedGame={setSelectedGame} />
        
            {/* <button type="button" onClick={props.close}> close modal</button>
         */}
        </div>
    );
    return <ModalTest
        open={props.open}
        onClose={props.close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        
        {body}
    </ModalTest>
}

export default Modal
