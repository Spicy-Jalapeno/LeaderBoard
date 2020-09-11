const isDev = process.env.NODE_ENV === 'development';
// const path = require('path')
// const webpack = require('webpack')

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: [
		'@babel/polyfill', // enables async-await
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	// devServer: {
	// 	contentBase: path.join(__dirname, '/public'), //serve your static files from here
	// 	proxy: [ // allows redirect of requests to webpack-dev-server to another destination
	// 		{
	// 			context: ['/api'],  // can have multiple
	// 			target: 'http://localhost:8080', // server and port to redirect to
	// 			secure: false,
	// 		},
	// 	],
	// 	hot: true

	// },
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	watchOptions: {
		ignored: /node_modules/
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	// plugins: [new webpack.HotModuleReplacementPlugin()]
};
