import React from 'react';
import './App.css';
import List from './components/List'
import AppBar from './components/AppBar'
import Routes from './Routes';
const App = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Routes />
      {/* <div className="App">
       <AppBar />
       <List />
     </div> */}
    </>
  );
}
export default App;
