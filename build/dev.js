/**
 * dev环境构建
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const config = require('./webpack.dev.conf');
const commonPath = require('./commonPath');

const apiProxy = proxy('/bookzw', {target: 'http://api.youmeixun.com', changeOrigin: true});

const app = express();
app.use('/bookzw/*', apiProxy);
const compiler = webpack(config);

app.use('/static', express.static(commonPath.staticDir));

//http://www.cnblogs.com/MonaSong/p/6555342.html
//app.use('/bookzw/*', proxy({target: 'http://api.youmeixun.com', changeOrigin: true}));
//app.use('/bookzw/*', apiProxy);  //api子目录下的都是用代理

// 处理HTML5历史记录API回退的问题
app.use(history());

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    stats: { colors: true },
    noInfo: true,
    publicPath: config.output.publicPath
}));

// 热重载
app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err){
    err && console.log(err);
});
