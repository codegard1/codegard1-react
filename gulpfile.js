const gulp = require('gulp');
const jshint = require('jshint');
const jsfiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jshint.reporter('jshint-jsx'));
});