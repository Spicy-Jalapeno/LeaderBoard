import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
import TableList from './components/TableList';


const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path="/List" component={TableList} />
        </>
    );
}

export default Routes;
