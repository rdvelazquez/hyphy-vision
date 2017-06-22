var path = require('path'),
    webpack = require('webpack'),
    cloneDeep = require('lodash.clonedeep');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

config = {
  devtool: 'source-map',
  entry: {
    hyphyvision : ['./src/entry.js'],
		vendor : [
              "jquery",
              "jquery-ui-bundle",
              "bootstrap", 
              "d3",
              "crossfilter", 
              "dc",
              "immutable",
              "underscore",
							"phylotree",
							"react"
						 ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },
	externals: {
		"jsdom":"window"
	},
  module: {
    rules: [
    {
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loaders: 'babel-loader',
      query : {
        presets:['react']
      }
    },
<<<<<<< Updated upstream
    { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"})},
		{
			test: require.resolve('jquery'),
			use: [
				{
					loader: 'expose-loader',
					query: 'jQuery'
				},
				{
					loader: 'expose-loader',
					query: '$'
				}
			]
		},
		{
			test: require.resolve('d3'),
			use: [
				{
					loader: 'expose-loader',
					query: 'd3'
				},
			]
		},
    { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader', options: {limit: 10000, mimetype:'application/font-woff'}},
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url-loader', options : { limit: 10000, mimetype: 'application/octet-stream'}},
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loaders: 'file-loader'},
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loaders: 'url-loader', options : {limit:10000, mimetype:'image/svg+xml'}},
		{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {}
		}
=======
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
		{
			test: /\.less?$/,
      include: './src',
      use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ["css-loader", "less-loader"],
        })
		},
		{ test: /jquery/, loader: 'expose?$!expose?jQuery' },
		{ test: /d3/, loader: 'expose?$!expose?d3' },
		{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
>>>>>>> Stashed changes
		],

  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug:true}),
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.js"}),
		new webpack.ProvidePlugin({
				$ : "jquery",
				jQuery : "jquery",
				d3: "d3",
				crossfilter : "crossfilter",
				dc : "dc",
				datamonkey : "datamonkey",
				_ : "underscore"
		}),
 		new webpack.IgnorePlugin(/jsdom$/),
		new ExtractTextPlugin("[name].css")
	],
  resolve: {
		alias: {
			'dc' : __dirname + '/node_modules/dc/dc.min.js',
			'dc.css' : __dirname + '/node_modules/dc/dc.min.css',
			'phylotree.css' : __dirname + '/node_modules/phylotree/phylotree.css'
		},
    modules : [
      'src',
      'node_modules'
    ],
<<<<<<< Updated upstream
    extensions: ['.json', '.js', '.jsx']
=======
    extensions: ['', '.json', '.js', '.jsx', '.less']
>>>>>>> Stashed changes
	},
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.debug = false;
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

//var minimized = cloneDeep(config);
//minimized.plugins.push(new webpack.optimize.UglifyJsPlugin());
//minimized.output.filename = 'hyphyvision.min.js';

//module.exports = [config,minimized];
module.exports = [config];
