
 
var gulp = require('gulp');
var del = require('del');

var concat = require('gulp-concat');

var sass = require('gulp-sass');
sass.compiler = require('node-sass');

var browserSync = require('browser-sync').create();

function clean() {
    return del([ './dist/' ]);
}

function assets() {
    return gulp.src('./src/assets/**/*.*')
        .pipe(gulp.dest('./dist/assets'))
        .pipe(browserSync.stream());
}

function scss() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.stream());
}

function script() {
    return gulp.src('./src/script/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('./dist/assets/script'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: './dist'
        }
    });
    gulp.watch('./src/assets/**/*.*', assets);
    gulp.watch('./src/html/**/*.html', html);
    gulp.watch('./src/script/**/*.js', script);
    gulp.watch('./src/scss/**/*.scss', scss);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(assets, html, script, scss));
exports.default = build;
exports.watch = watch;