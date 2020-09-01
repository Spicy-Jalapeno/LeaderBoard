import { Modal as ModalTest, makeStyles } from '@material-ui/core'
import React, { useState } from 'react';
import GamePlayedForm from '../GamePlayedForm';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles({
    paper: {
        position: 'absolute',
        width: 400,
        // border: '2px solid #000',
        backgroundColor: 'white',
        outline: 0
    },
})


const Modal = (props) => {
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle);
    const body = (

        <div style={modalStyle} className={classes.paper}>
        
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
