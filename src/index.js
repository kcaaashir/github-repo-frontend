import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router";
require('dotenv').config()

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);

