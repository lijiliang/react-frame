import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import Routes from './routes';

ReactDOM.render((
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
), document.getElementById('root'));
