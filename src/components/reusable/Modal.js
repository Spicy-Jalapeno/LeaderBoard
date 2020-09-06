import { Modal as ModalTest, makeStyles } from '@material-ui/core'
import React from 'react';
import GamePlayedForm from '../GamePlayedForm';

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
        top: '35%',
        left: '40%',
        margintop: '-50px',
        marginleft: '-50px',
        width:400
    },
})


const Modal = (props) => {
    const classes = useStyles()
    // const [modalStyle] = useState(getModalStyle);style={modalStyle}
    const body = (

        <div  className={classes.paper}>
        
            <GamePlayedForm />
        
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
