var gulp = require('gulp'),
minify = require('gulp-uglify'),//代码啊压缩
babel = require('gulp-babel');

gulp.task('default',function(done) {
    gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
    done();
})