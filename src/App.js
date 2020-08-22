import React from 'react';
import './App.css';
import List from './components/List'
import AppBar from './components/AppBar'
const App = () => {
  return (
    <div className="App">
      <AppBar />
      <List />
    </div>
  );
}
export default App;
