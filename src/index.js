import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import nQueens from './core';

ReactDOM.render(<App />, document.getElementById('root'));

const solver = nQueens(8, { x: 4, y: 3 });
const results = solver();
console.log('end', results);
