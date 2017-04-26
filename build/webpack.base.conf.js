/**
 * webpack构建流程，公用配置
 */
const path = require('path');
const webpack = require('webpack');
const commonPath = require('./commonPath');   // 路径配置
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(commonPath.src, 'app.js'),
        /**
         * [vendor 框架 / 类库 分离打包]
         */
        vendor: path.join(commonPath.src, 'vendor.js')
        // vendor: ['react', 'react-dom', 'history', 'lodash', 'redux', 'react-redux'],
    },
    output: {
        path: path.join(commonPath.dist, 'static'),
        // filename: '[name].js',
        publicPath: '/static/'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        // resolve.alias 配置路径映射
        alias: {
            /**
             * 自定义路径别名
             */
            jquery: 'jquery'
        }
    },
    // 模块 - 各种加载器
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'react-hot-loader/webpack'
                },{
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: [['es2015', {modules: false}], 'react', 'stage-0'],
                        plugins: ['transform-runtime', 'transform-decorators-legacy']
                    }
                }],
                exclude: /node_modules/,  // 优化babel 排除
                include: path.join(commonPath.src),   //优化babel 打包范围
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10240, // 10KB 以下使用 base64
                    name: 'img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10240,
                    name: 'fonts/[name]-[hash:8].[ext]'
                }
            }
        ]
    },
    // 插件
    plugins: [
        // 进度条
        new NyanProgressPlugin()
    ]
};
