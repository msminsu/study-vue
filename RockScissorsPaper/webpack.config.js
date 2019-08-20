const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
module.exports = {
	mode:'development',//
	devtool:'eval',// 처리속도
	resolve:{// 확장자들  불러올때 생약가능
		extensions:['.js', '.vue']
	},
	entry: {
		// app: './main.js',
		app : path.join(__dirname, 'main.js')
	},
	devServer: {
		     contentBase: './'
		   },
	module: {
		//어떻게 합칠건지 .vue 파일을 js 파일로 합쳐줌
		rules:[{//  vue  담당
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.css$/, //css 담당
			use:[
				'vue-style-loader',
				'css-loader',
			]
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	output: {
		filename: '[name].js',  // app.js 로 지정하거나 [name] 으로 entry 이름 가져옴
		// path: './dist' 절대 경로로 표시해야됌, node __dirname 사용
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist',  //webpack-dev-server 설정
	},
};