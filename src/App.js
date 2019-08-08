import React from 'react';
import './App.css';
import Dashboard from'./components/Dashboard/Dashboard'
import Landing from'./components/Landing/Landing'
import Nav from './components/Nav/Nav'
import Transfer from './components/Transfer/Transfer'
import Transaction from './components/Transaction/Transaction'


function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Landing/>
      <Nav/>
      <Transfer/>
      <Transaction/>
    </div>
  );
}

export default App;
