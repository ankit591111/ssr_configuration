/*
1. All the codes regarding bundling of components code will be here
2. Here for bundling we are using webpack4
3. BundleAnalyzerPlugin is used for creating html report of bundles produced by webpack
4. mini-css-extract-plugin is used to extract small css according to the requirement of file
 */
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin'); //

module.exports = [
    {
        mode: "development",
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
                }
            ]
        }
    },
    {
        // In this module change the code for bundling of client
        mode: "development",
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
                filename: 'index.css',
                allChunks: true,
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),

            new HtmlWebpackPlugin({
                title: 'My App',
                template: './src/app/index.html'
            })
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { // here we are creating seperate bundle for node modules
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/, // this regex read all types of css and css pre-processor
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it uses publicPath in webpackOptions.output
                                publicPath: './',
                            },
                        },
                        'css-loader',
                        'sass-loader',
                        'style-loader'
                    ],
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
            extensions: ['.js', '.jsx'],
        }
    },

]