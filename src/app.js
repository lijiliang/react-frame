import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// import { AppContainer } from 'react-hot-loader';
import { Root } from './containers/root';

// let store = creatStore();
//
// render(
//     <Provider store={store}>
//
//     </Provider>,
//     document.getElementById('root')
// )
// console.log('asdf')
import './assets/less/common.less';
import smaller from './assets/img/larger.png';

ReactDOM.render(
    <Root/>,
  document.getElementById('root')
);
console.log(smaller);
// console.log('asdasd艺术')
