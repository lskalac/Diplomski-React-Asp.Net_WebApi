import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById("app")
);
