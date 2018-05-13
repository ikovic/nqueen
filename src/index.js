import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getInitialBoard } from './core';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(getInitialBoard(8, { x: 4, y: 2 }));
