const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, '../client/client.jsx')],
    },
    output: {
        publicPath: '../scripts/',
        path: path.join(__dirname, '../assets/scripts'),
        filename: '[name].js',
        chunkFilename: '[name]_[chunkhash:5].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
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
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]!sass')
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /node_modules/,
            loader: 'file?name=../images/[hash:8].[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', 'jpg', 'jpeg', 'png', 'gif', 'svg']
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('../styles/[name].css', {
            allChunks: true
        }),
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
    ]
};