/**
 * dev环境 构建配置
 */
const webpack = require('webpack');
const config = require('./webpack.base.conf');  // 引入公用配置
const commonPath = require('./commonPath');   // 路径配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SOURCE_MAP = false;

// 配置config
config.output.filename = '[name].js';
config.output.chunkFilename = '[id].js';
config.devtool = SOURCE_MAP ? 'eval-source-map' : false;
config.output.publicPath = '/';

// 添加热重载相关的代码
config.entry.app = [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    config.entry.app
];

config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 提取 CSS 到单独的文件中
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
        template: commonPath.indexHTML,
        filename: 'index.html',
        chunksSortMode: 'none'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',   //指定公共bundle名字
        minChunks: Infinity, // 随着 入口chunk 越来越多，这个配置保证没其它的模块会打包进 公共chunk
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3100/',
        logConnections: false,
        notify: false
    }, {
        // 防止sync自动加载页面，直接让webpack dev server 来处理
        reload: false
    })
);
module.exports = config;
