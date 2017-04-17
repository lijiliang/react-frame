/**
 * 生产环境 构建配置
 */
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf');
const commonPath = require('./commonPath');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const SOURCE_MAP = false;

// 配置config
config.output.filename = '[name].[chunkhash:8].js';
config.output.chunkFilename = '[id].[chunkhash:8].js';
config.devtool = SOURCE_MAP ? 'source-map' : false;

config.module.rules.push(
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        minimize: true
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        })
    }
);

// webpack插件配置
config.plugins.push(
    // 删除重复数据
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    // 压缩JS
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 构建优化插件
    new webpack.optimize.CommonsChunkPlugin({
        // 公共代码分离打包
        name: ['vendor']
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 30000
    }),
    // 提取 CSS 到单独的文件中
    new ExtractTextPlugin({
        filename: '[name].[contenthash:8].css'
    }),
    // 生成文件hash对应的map文件
    new AssetsPlugin({
        filename: 'assetsMap.json',
        path: commonPath.dist
    }),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: commonPath.indexHTML
    })
);
module.exports = config;
