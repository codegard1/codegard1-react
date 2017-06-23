const gulp = require('gulp');
const inject = require('gulp-inject');
// const jshint = require('gulp-jshint');
const del = require('del');
const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('clean', () => {
    return del([
        'gulp-output.txt'
    ]);
});

// gulp.task('style', () => {
//     gulp.src(jsFiles)
//         .pipe(jshint())
//         .pipe(jshint.reporter('jshint-stylish', {
//             verbose: true
//         }));
// });

gulp.task('inject', function () {
    var target = gulp.src('./public/index.html');
    var sources = gulp.src(['./node_modules/office-ui-fabric-react/dist/css/*.min.css'], {read:false});
     return target.pipe(inject(sources))
     .pipe(gulp.dest('./Public'))
});

gulp.task('default', ['inject']);