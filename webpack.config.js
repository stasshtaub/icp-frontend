var path = require("path");

module.exports = {
	entry: {
		common: "./src/js/common",
		home: "./src/js/home",
		capabilities: "./src/js/capabilities",
		about: "./src/js/about",
		schedule: "./src/js/schedule",
		branches: "./src/js/branches",
		team: "./src/js/team",
		partners: "./src/js/partners",
		"news-detail": "./src/js/news-detail"
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
