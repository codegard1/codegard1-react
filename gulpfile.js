const gulp = require('gulp');
const jshint = require('gulp-jshint');
const del = require('del');
const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('clean', () => {
    return del([
        'gulp-output.txt'
    ]);
});

gulp.task('style', () => {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('default', ['style']);