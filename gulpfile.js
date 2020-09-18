const gulp = require("gulp");
const pug = require("gulp-pug");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const flatten = require("gulp-flatten");
const ghpages = require("gh-pages");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");
const webpackConfig = require('./webpack.config');

const settings = {
	dist: "dist",
	port: 8080,
	open: "home",
};

gulp.task("pug", () =>
	gulp
		.src("src/pug/views/*/*.pug")
		.pipe(pug())
		.pipe(flatten())
		.pipe(gulp.dest(settings.dist))
);

gulp.task("copy", () =>
	gulp
		.src(
			[
				"src/resources/**/*.*",
				"src/resources/**/.*",
				"!src/resources/**/.keep",
			],
			{
				base: "src/resources",
				dot: true,
			}
		)
		.pipe(gulp.dest(settings.dist))
);

gulp.task("images", () =>
	gulp.src("src/images/**/*.*").pipe(gulp.dest(`${settings.dist}/images`))
);

gulp.task("scss", () => {
	const plugins = [autoprefixer(), cssnano()];

	return gulp
		.src("./src/scss/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss(plugins))
		.pipe(gulp.dest(`${settings.dist}/css`));
});

gulp.task("js", () =>
	webpack(webpackConfig)
		// .pipe(uglify())
		.pipe(gulp.dest(webpackConfig.output.path))
);

gulp.task("watch", () => {
	gulp.watch(
		["src/resources/**/*.*", "src/resources/**/.*"],
		gulp.series("copy")
	);

	gulp.watch("src/images/**/*.*", gulp.series("images"));

	gulp.watch(
		["src/*.pug", "src/pug/**/*.pug"],
		{
			delay: 0,
		},
		gulp.series("pug")
	).on("all", (event, file) => {
		global.emittyPugChangedFile = event === "unlink" ? undefined : file;
	});

	gulp.watch("src/scss/**/*.scss", gulp.series("scss"));

	gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task("serve", () => {
	browserSync.init({
		notify: false,
		open: settings.open,
		port: settings.port,
		files: [`${settings.dist}/**/*`],
		server: {
			baseDir: settings.dist,
		},
	});
});

gulp.task(
	"build",
	gulp.series("copy", "pug", gulp.parallel("images", "scss", "js"))
);

gulp.task("default", gulp.series("build", gulp.parallel("watch", "serve")));

gulp.task("deploy", () =>
	ghpages.publish("dist", (err) => {
		console.log(err);
	})
);
