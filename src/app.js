import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import Routes from './routes';
import SlideComponent from './component/slideComponent';

import Home from './component/home';
import About from './component/about';
import Topics from './component/topics';
import TopicsChild from './component/topicsChild';

ReactDOM.render((
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
), document.getElementById('root'));