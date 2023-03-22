import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from '../src/Head'
import TeamList from './TeamList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <TeamList />
      </header>
    </div>
  );
}

export default App;
