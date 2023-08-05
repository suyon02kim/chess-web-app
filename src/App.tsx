import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from 'chessboardjsx';

function App() {
  return (
    <div className="App">
      <p>Barbie Fischer Chess Let's GOOO</p>
      <header className="App-header">
        <Chessboard width={400} /> 
      </header>
    </div>
  );
}

export default App;
