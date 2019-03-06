'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const appRoot = document.getElementById('app-root');

if (appRoot) ReactDOM.render(<App />, appRoot);