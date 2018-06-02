const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
	mode: 'development',
	entry: [
		'./src/index.js',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build',
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [{
					loader: 'style-loader', // creates style nodes from JS strings
				}, {
					loader: 'css-loader',
					options: {
						sourceMap: true,
					}, // translates CSS into CommonJS
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					}, // compiles Sass to CSS
				}],
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'file-loader',
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				query: {
					partialDirs: [
						path.join(__dirname, './src/views', 'partials'),
					],
				},
			},
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			inject: true,
			template: './index.html',
			appMountId: 'app',
			links: [
				'https://fonts.googleapis.com/css?family=Cardo:400,700|Montserrat:400,700',
			],
		}),
	],
};

module.exports = config;
