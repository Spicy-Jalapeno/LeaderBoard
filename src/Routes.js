import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';



const Routes = () => {

    return (
        <>
            <Route exact path='/' component={Home} />
        </>
    );
}

export default Routes;
