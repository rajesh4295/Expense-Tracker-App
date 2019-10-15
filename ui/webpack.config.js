module.exports = {
	entry: './src/index.js',
	output:
	{
		path: __dirname + "/public/assets/",
        publicPath: "/assets/",
        filename: "bundle.js"
	},
	devServer:
	{
		contentBase:  __dirname + "/assets/",
	},
	module:
	{
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		}]
	},
};