import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Users />
      </header>
    </div>
  );
}

export default App;
