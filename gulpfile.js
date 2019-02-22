
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

sass.compiler = require('node-sass');

gulp.task('sass', function () {

    console.log("sass script started")

    return gulp.src('public/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css'));
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