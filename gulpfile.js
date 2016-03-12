var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('build', function() {
  return gulp.src(['src/*.js'])
    .pipe(concat('puca-tools.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
