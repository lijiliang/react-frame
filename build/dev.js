/**
 * dev环境构建
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const history = require('connect-history-api-fallback');
const config = require('./webpack.dev.conf');
const commonPath = require('./commonPath');

const app = express();

const compiler = webpack(config);

app.use('/static', express.static(commonPath.staticDir));

// 处理HTML5历史记录API回退的问题
app.use(history());

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// 热重载
app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err){
    err && console.log(err);
});
