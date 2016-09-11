//release
var path = require("path"),
    webpack = require('webpack'),
    MPA = require('./webpack.mpa'),
    extractTextPlugin = require("extract-text-webpack-plugin");

// env == pro
var config = {
        watch: true,
        entry: MPA.entry,
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "[name].bundle.js",
            publicPath: '../'
        },
        resolve: {
            root: path.join(__dirname, 'src'),
            extensions: ['', '.js', '.jsx','.less']
        },
        module: {
            loaders: [{
                    test: /\.(js|jsx)$/,
                    loaders: ['react-hot-loader','babel-loader?presets[]=react&presets[]=es2015'],
                    exclude: /node_modules/,
                    include: [path.join(process.cwd(), './src')]
                },{
                    test: /\.css$/,
                    loader: extractTextPlugin.extract("style-loader","css-loader")
                },{
                    test: /\.less/,
                    loader: extractTextPlugin.extract("style-loader","css-loader!less-loader")
                },{
                    test: /\.(png|jpg)$/,
                    loader: 'style!css!less'
                },{
                    test: /\.svg$/,
                    loader: 'babel!react-svg'
                }
            ]
        },
        plugins: MPA.plugins
    };
module.exports = config;
