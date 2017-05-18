const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, '../client/client.jsx'),
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../assets/scripts'),
        filename: 'app.js',
        chunkFilename: '[name]_[chunkhash:5].js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass')
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /node_modules/,
            loader: 'file?name=../images/[name].[hash:base64:5].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', 'jpg', 'jpeg', 'png', 'gif', 'svg']
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('../styles/app.css'),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./reactFest.json')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};