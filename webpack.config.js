const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./client/index.jsx'],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(['index']),
        new HtmlWebpackPlugin({
            title: 'Product List',
            filename: 'index.html',
            template: './public/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                secure: false
            }
        }
    }
};
