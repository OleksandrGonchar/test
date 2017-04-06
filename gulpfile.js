var gulp = require('gulp');
var util = require('gulp-util');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('app/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .on('error', errorHandler)
        .pipe(gulp.dest('./app/'))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

function errorHandler(error) {
    util.log(util.colors.red('Error'), error.message);

    this.end();
}

gulp.task('default', ['browserSync', 'sass'], function (){
    gulp.watch('app/**/*.scss', ['sass'], browserSync.reload);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', ['sass'], browserSync.reload);
    gulp.watch('app/js/**/*.js', ['sass'], browserSync.reload);
});