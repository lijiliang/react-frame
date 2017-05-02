import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import Routes from './routes';

if(__DEV__){
    console.info('[当前环境] 开发环境!');
}
if(__PROD__){
    console.info('[当前环境] 生产环境');
}

ReactDOM.render((
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
), document.getElementById('root'));
