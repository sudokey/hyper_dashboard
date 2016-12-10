const gulp = require('gulp');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');

gulp.task('less', function () {
  const less = require('gulp-less');
  const autoprefixer = require('gulp-autoprefixer');

  return gulp.src(['sources/less/**/*.less', '!sources/less/includes/**/*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css'));
});

gulp.task('nunjucks', function () {
  const nunjucks = require('gulp-nunjucks-render');

  return gulp.src(['sources/templates/**/*.nunjucks', '!sources/templates/includes/**/*.nunjucks'])
    .pipe(plumber())
    .pipe(nunjucks({
      path: 'sources/templates/includes'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function (cb) {
  gulp.watch('sources/templates/**/*.nunjucks', ['nunjucks']);
  gulp.watch('sources/less/**/*.less', ['less']);
  cb();
});

gulp.task('default', function (cb) {
  runSequence('nunjucks', 'less', 'watch');
  cb();
});