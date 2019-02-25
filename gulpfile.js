
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
const minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {

    console.log("sass script started")

    return gulp.src('public/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('javascript', function() {

    console.log("javascript script started");

    return gulp.src([
        'public/assets/js/jquery.min.js',
        'public/assets/js/jquery.scrollex.min.js',
        'public/assets/js/jquery.scrolly.min.js',
        'public/assets/js/browser.min.js',
        'public/assets/js/breakpoints.min.js',
        'public/assets/js/util.js',
        'public/assets/js/validate.min.js',
        'public/assets/js/main.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/assets/js'));

});

gulp.task('watch', function () {

    browserSync.init({
        host: "ingomez.local",
        port: 80,
        server: {
            baseDir: "public/"
        }
    });

    gulp.watch('public/assets/sass/**/*.scss').on('change', gulp.series('sass', browserSync.reload));
    gulp.watch('public/*.html').on('change', gulp.series(browserSync.reload));
});