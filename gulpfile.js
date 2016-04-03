var gulp = require('gulp');
var concat = require('gulp-concat');

var files = ['src/puca-addresses.js', 'src/puca-history.js', 'src/puca-piping.js',];

gulp.task('build', function() {
  return gulp.src(files)
    .pipe(concat('puca-tools.js'))
    .pipe(gulp.dest('dist'));
});
