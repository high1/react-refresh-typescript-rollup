import React, { FC } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter instance={3} />
      </header>
    </div>
  );
};

export default App;
