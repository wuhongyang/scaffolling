//热部署webpack配置
var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var argv = process.argv,
    last = argv[argv.length-1],
    enter = last.substring(2,last.length);

// env == dev

var config = {
        watch: true,
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/entry/'+ enter +'.js'
        ],
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: enter+".bundle.js",
            publicPath: '/dist/'
        }
        ,

        resolve: {
            extensions: ['', '.js', '.jsx','.less']
        }
        ,

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    loaders: ['react-hot-loader','babel-loader?presets[]=react&presets[]=es2015'],
                    exclude: /node_modules/,
                    include: [path.join(process.cwd(), './src')]
                },
                {
                    test: /\.css$/,
                    loader: 'style!css',
                },
                {
                    test: /\.less/,
                    loader: 'style-loader!css-loader!less-loader',
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'
                },
                {
                    test: /\.svg$/,
                    loader: 'babel!react-svg',
                }
            ]
        }
        ,

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }),
            //分隔文件

            //new webpack.optimize.CommonsChunkPlugin('react', 'react.js'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ]
    }
    ;
module.exports = config;
