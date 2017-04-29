
import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './containers/root';

import './assets/less/common.less';
import smaller from './assets/img/larger.png';

if (__DEV__) {
  console.info('[当前环境] 开发环境')
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);
console.log(smaller);

// console.log('asdasd艺术')
