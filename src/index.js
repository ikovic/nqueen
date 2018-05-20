import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getInitialBoard, solveQueensProblem } from './core';

ReactDOM.render(<App />, document.getElementById('root'));

const board = getInitialBoard(8, { x: 4, y: 3 });
const results = solveQueensProblem(board, 7);
console.log('end', results);
