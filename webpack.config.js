// webpack.config.js
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV || 'development';
const isDevEnv = env === 'development'; //測試環境

module.exports = {
    entry: [//'@babel-polyfill',
    './src/index.js','./src/scss/style.scss'], 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            //編譯JSX ES6
            { 
                test: /.js$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-env','@babel/preset-react'] } 
                } 
            },
            //編譯ES6
           // { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            //編譯SCSS
            { 
                test: /\.scss$/, 
                use: [ 
                    isDevEnv ? { loader: "style-loader"} : MiniCssExtractPlugin.loader, 
                   // "style-loader",
                   // MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ] 
            },    
            {
                test: /\.css$/,
                use:  [ 'style-loader', 'css-loader']
            }                     
        ]
    },

    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            include: path.join(__dirname, 'src')
        }),
        new MiniCssExtractPlugin({
            // 指定輸出位置
            filename: "../dist/css/style.css"
        })
    ],

    //devserver設定
    devServer: {
        //指定開啟port為9000
        port: 9000,
        contentBase: path.join(__dirname, '/'),
    }
}