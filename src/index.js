import React from 'react';
import ReactDOM from 'react-dom';
import postal from 'postal';

import './index.css';
import App from './App';
import nQueens from './core';

ReactDOM.render(<App />, document.getElementById('root'));

const solverChannel = postal.channel('nqueen');
solverChannel.subscribe('step', data => console.log('step', data));
// solverChannel.subscribe('backtrack', data => console.log('backtrack', data));
solverChannel.subscribe('done', data => console.log('done', data));

const solver = nQueens(8, { x: 4, y: 3 }, solverChannel);
solver();
