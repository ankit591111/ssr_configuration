/*
1. All the codes regarding bundling of components code will be here
2. Here for bundling we are using webpack4
3. BundleAnalyzerPlugin is used for creating html report of bundles produced by webpack
4. mini-css-extract-plugin is used to extract small css according to the requirement of file
 */
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin'); //
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const mode_type = 'production'
module.exports = [
    {
        mode: mode_type,
        entry: './src/server.js',
        output: {
            path: __dirname+'/dist',
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        devtool: 'inline-source-map',
        target: 'node',
        externals: nodeExternals(),
        module: {
            rules: [
                {

                    test: /\.js$/, // regex to tell webpack use the following file whose extension start with .js
                    exclude: /node_modules/,
                    loader: 'babel-loader',

                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(sa|sc|c)ss$/, // this regex read all types of css and css pre-processor
                    loader: ['ignore-loader'],

                }
            ]
        }
    },
    {
        // In this module change the code for bundling of client
        mode: mode_type,
        entry: './src/app/browser.js',
        output: {
            path: __dirname+'/dist/assets',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devtool: 'inline-source-map', // it is used for development to identify errors more clearly
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery",
            //     "window.jQuery": "jquery"
            // }),
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { // here we are creating seperate bundle for node modules
                        test: /[\\/]node_modules[\\/(?!express)\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i
                })
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i, // this regex read all types of css and css pre-processor
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],


                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx','.css'],
        }
    },

]