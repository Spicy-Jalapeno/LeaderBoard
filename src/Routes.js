import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
import List from './components/List';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path="/List" component={List} />
        </>
    );
}

export default Routes;