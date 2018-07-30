const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require("webpack");

const srcUrl = path.join(__dirname, '/src/');

module.exports = {
    entry: "./src/app.tsx",

    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
	    new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([
            { from: 'src/localization/translations.json', to: '', force: true},
        ]),
    ],

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [

	        {
		        test: /\.(png|jp(e?)g|svg|gif)$/,
		        use: [{
			        loader: 'file-loader',
			        options: {
				        name: 'images/[name]-[hash].[ext]'
			        }
		        }]
	        },

            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                    {
                        loader: "tslint-loader",
                        options: {
                            emitErrors: true
                        }
                    }
                ]
            },

            {
                test: /\.js$/,
                loader: "source-map-loader"
            },

	        {
		        test: /\.css/,
		        loader: 'style-loader!css-loader'
	        },

            {
	            test: /\.styl$/,
	            include: srcUrl + 'styles/initial.styl',
                loader: 'style-loader!css-loader!stylus-loader'
            },

	        {
		        test: /\.styl$/,
		        exclude: srcUrl + 'styles/initial.styl',
		        use: ExtractTextPlugin.extract({
			        fallback: 'style-loader',
			        use: [
			            {
			                loader: 'css-loader',
                            options: {
	                            modules: true,
	                            localIdentName: '[name]__[local]-[hash:base64:5]'
                            }
                        },

                        {
                            loader: 'stylus-loader',
                            options: {
	                            import: srcUrl + 'styles/shared/*.styl',
                            }
                        }
                    ]
		        })
	        }
        ]
    },

    devServer: {
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: true,
            timings: true,
            chunks: false,
            children: false,
            chunkModules: false,
            modules: false,
            errorDetails: false,
            cachedAssets: false,
        },
        hot: false,
        inline: false,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        port: 80,
        // disableHostCheck: true
    },

    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
    },

};