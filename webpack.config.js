var path = require("path");

module.exports = {
	entry: {
		home: "./src/js/home",
		common: "./src/js/common",
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
