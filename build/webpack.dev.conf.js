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
    // 开启react代码的模块热替换（HMR）
    'react-hot-loader/patch',
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    config.entry.app
];

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.rules.push(
    {
        test: /\.less$/,
        use: [
            'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
            'less-loader'
        ]
    }
);

config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.HotModuleReplacementPlugin(),
    // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),
    // 提取 CSS 到单独的文件中
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
        template: commonPath.indexHTML,
        filename: 'index.html',
        // chunksSortMode: 'none'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',   //指定公共bundle名字
        minChunks: Infinity, // 随着 入口chunk 越来越多，这个配置保证没其它的模块会打包进 公共chunk
    }),
    new BrowserSyncPlugin({
        host: '127.0.0.1',
        port: 9090,
        proxy: 'http://127.0.0.1:9000/',
        logConnections: false,
        notify: false
    }, {
        // 防止sync自动加载页面，直接让webpack dev server 来处理
        reload: false
    })
);
module.exports = config;
