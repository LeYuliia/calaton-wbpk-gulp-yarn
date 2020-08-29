const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const newer = require("gulp-newer");


gulp.task("imgmin", function () {
  return gulp
    .src("./src/icons/original/*")
    .pipe(newer("./src/icons/optim/"))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("./src/icons/optim/"));
});

gulp.task("watch", function () {
  return gulp.watch("./src/icons/original/*", gulp.series("imgmin"));
});


// const webpack = require("webpack-stream");
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");
// const rename = require("gulp-rename");
// const sourcemaps = require("gulp-sourcemaps");
// const cleanCSS = require("gulp-clean-css");

// // Compilation .scss to .css
// gulp.task("sass", function () {
//     return gulp
//       .src("./src/**/*.scss", {
//         ignore: [
//           "./src/styles/placeholders.scss",
//           "./src/styles/variables.scss",
//         ],
//       })
//       .pipe(sass())
//       .pipe(gulp.dest("./src/gulp/"));});

// // Add autoprefixes for cross-browser compatibility
// gulp.task('autoprefixer', function () {
//     return gulp
//       .src("./src/gulp/**")
//       .pipe(
//         autoprefixer({
//           overrideBrowserslist: ["last 2 versions"],
//           cascade: false,
//         })
//       )
//     .pipe(gulp.dest("./src/gulp"));
// })

// // Minify css
// gulp.task('cssmin', function () {
//     return gulp
//       .src("./src/gulp/**/*.css", {
//         ignore: './src/gulp/**/*.min.css'
//       })
//       .pipe(sourcemaps.init())
//       .pipe(cleanCSS())
//       .pipe(sourcemaps.write())
//       .pipe(rename({ suffix: ".min" }))
//       .pipe(gulp.dest("./src/gulp"));})

// // Watch styles changing

// gulp.task('watch', function () {
//  gulp.watch("./src/**/*.scss", gulp.series("sass","autoprefixer", "cssmin", ));
// })

