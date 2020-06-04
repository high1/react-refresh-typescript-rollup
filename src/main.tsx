import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';

const root = document.querySelector('#app');
document.body.appendChild(root as HTMLElement);
ReactDOM.render(<App />, root)
