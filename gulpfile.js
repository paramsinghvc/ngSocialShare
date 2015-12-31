var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('build', function() {
    gulp.src(['src/**/*.js'])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(webpack())
});

gulp.task('default', function() {
    gulp.watch(['src/**/*.js'], ['build']);
})
