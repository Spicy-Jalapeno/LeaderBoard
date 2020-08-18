import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AppBar from './components/AppBar'
function App() {
  return (
    <div className="App">
      <AppBar />
      <List />
    </div>
  );
}

export default App;
