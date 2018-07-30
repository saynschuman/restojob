const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcUrl = path.join(__dirname, '../src/');

module.exports = (baseConfig, env, defaultConfig) => {
	const config = baseConfig;

	config.plugins.push(new ExtractTextPlugin("styles.css"));

	config.module.rules.push(
		{
			test: /\.(png|jp(e?)g|svg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name]-[hash:base64:5].[ext]',
					outputPath: 'static/images'
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
	);
	config.resolve.extensions.push(".ts", ".tsx", ".js", ".json");
	return config;
};