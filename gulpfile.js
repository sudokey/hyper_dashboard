const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');

// TODO: Собрать все скрипты в один файл
gulp.task('js', function () {
  return gulp.src('sources/js/**/*')
    .pipe(gulp.dest('public/js'));
});

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
    .pipe(nunjucks({ path: 'sources/templates/includes' }))
    .pipe(gulp.dest('public'));
});

gulp.task('img', function () {
  const imagemin = require('gulp-imagemin');
  const pngquant = require('imagemin-pngquant');

  return gulp.src('sources/img/**/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('public/img'));
});

gulp.task('vendor', function () {
  return gulp.src('sources/vendor/**/*')
    .pipe(gulp.dest('public/vendor'));
});

gulp.task('clean', function () {
  const clean = require('gulp-clean');

  return gulp.src('public', { read: false })
    .pipe(clean());
});

gulp.task('watch', function (cb) {
  gulp.watch('sources/js/**/*.js', ['js']);
  gulp.watch('sources/templates/**/*.nunjucks', ['nunjucks']);
  gulp.watch('sources/less/**/*.less', ['less']);
  gulp.watch('sources/img/**/*.*', ['img']);
  gulp.watch('sources/vendor/**/*.*', ['vendor']);
  cb();
});

gulp.task('default', function (cb) {
  runSequence('clean', 'nunjucks', 'js', 'less', 'img', 'vendor', 'watch');
  cb();
});