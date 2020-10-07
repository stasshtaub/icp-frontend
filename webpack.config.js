var path = require("path");

module.exports = {
	entry: {
		common: "./src/js/common",
		home: "./src/js/home",
		capabilities: "./src/js/capabilities"
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist/js"),
	},
};
