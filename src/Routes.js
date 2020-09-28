import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
import TableList from './components/TableList';
import createHistory from "history/createBrowserHistory"


const Routes = () => {

    return (
        <>
            <Route exact path='/' component={Home} />
        </>
    );
}

export default Routes;
