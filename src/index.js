'use strict';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const appRoot = document.getElementById('app-root');

if (appRoot) ReactDOM.render(<App />, appRoot);