const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const json = require('./webpack/json');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/about.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'comments.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/comments.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'equipment.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/equipment.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'news.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/news.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'product.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/product.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'services.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/services.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'count.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/count.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/article.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"window.jQuery": "jquery/dist/jquery.min.js"
			}),
			new webpack.ProvidePlugin({
				GoogleMapsLoader: 'google-maps'
			})
		]
	},
	pug(),
	images(),
	fonts(),
	json()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};