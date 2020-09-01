import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
<<<<<<< HEAD
=======
import TableList from './components/TableList';

>>>>>>> 1a71d3ff6fbe54fe6ebbef263b020876611e4995

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
<<<<<<< HEAD
=======
            <Route path="/List" component={TableList} />
>>>>>>> 1a71d3ff6fbe54fe6ebbef263b020876611e4995
        </>
    );
}

export default Routes;
