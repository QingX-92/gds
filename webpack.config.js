// 导入webpack
var webpack = require('webpack');
//虚拟DOM
module.exports = {
	devtool: 'source-map', //用于调试
	entry: __dirname+'/main.js', //入口文件
	//出口文件
	output:{
		path: __dirname + "/public",
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.vue$/,		
			loader: 'vue-loader' 
		}]
	},
	//vue 2.0加上此句
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置webpack-dev-server
	devServer: {
		contentBase: "./public", //本地服务器的文件夹
		inline: true, //自动刷新
		port: 3234,
	}
}