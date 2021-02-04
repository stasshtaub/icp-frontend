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
		news: "./src/js/news",
		"news-detail": "./src/js/news-detail",
		"forms-page": "./src/js/forms-page",
		"forms-participation": "./src/js/forms/forms-participation",
		reviews: "./src/js/reviews",
		leading: "./src/js/leading",
		programs: "./src/js/programs",
		"hotline-page": "./src/js/hotline-page",
		festival: "./src/js/festival",
		"loyalty-program": "./src/js/loyalty-program",
		"news-detail2": "./src/js/news-detail2",
		"helpers/video-modals": "./src/js/helpers/video-modals",
		library: "./src/js/library"
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
		filename: ({ chunk: { name } }) => {
			return ["forms-participation"].includes(name) ? "forms/[name].js" : "[name].js";
		},
		path: path.resolve(__dirname, "dist/js"),
	},
};
