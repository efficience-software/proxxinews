var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('copy-index', function() {
  return gulp.src('./index.html')
   .pipe(gulp.dest('./build'));
});

gulp.task('copy-js', function() {
  return gulp.src('./js/*')
   .pipe(gulp.dest('./build/js'));
});

gulp.task('copy-assets', function() {
  return gulp.src('./img/*')
   .pipe(gulp.dest('./build/img'));
});

gulp.task('build', ['sass', 'copy-assets', 'copy-js', 'copy-index'], function() {
  return gulp.src('./css/*')
   .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
