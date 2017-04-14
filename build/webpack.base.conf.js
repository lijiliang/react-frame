/**
 * webpack构建流程，公用配置
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPath = require('./commonPath');   // 路径配置

module.exports = {
    entry: {
        app: path.join(commonPath.src, 'app.js'),
        /**
         * [vendor 框架 / 类库 分离打包]
         */
        vendor: ['react', 'react-dom', 'lodash', 'redux', 'react-redux'],
    },
    output: {
        path: path.join(commonPath.dist, 'static'),
        // filename: '[name].js',
        publicPath: '/static/'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
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
                use: 'babel-loader'
            },
            // {
            //     test: /\.less$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: { sourceMap: true, importLoaders: 1}
            //             },
            //             {
            //                 loader: 'less-loader', options: { sourceMap: true }
            //             }
            //         ]
            //     })
            // }
        ]
    },
    // 插件
    plugins: []
};
