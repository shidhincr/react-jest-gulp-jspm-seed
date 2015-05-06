'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')({scope: ['dependencies']});
var del = require('del');
var browserSync = require('browser-sync').create();

/**
 * Jest cli requires --harmony flags for < node 0.12
 */
require('harmonize')();

/*
 * Helper tasks
 */
gulp.task('clean', function (cb) {
  del('components', function () {
    cb();
  });
});

gulp.task('build', function () {
  return gulp.src(['app.js', 'scripts/*.js'])
    .pipe(plugins.react())
    .pipe(gulp.dest('components'));
});

gulp.task('watch-source', ['build'], browserSync.reload);

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['scripts/*.js', '*.html'], ['watch-source']);

});

gulp.task('jest', plugins.shell.task('npm test', {
    // So our task doesn't error out when a test fails
    ignoreErrors: true
}));

/*
 * Main tasks
 */
gulp.task('develop', function (cb) {
  runSequence(
    'clean',
    'build',
    'serve',
    cb
  );
});

gulp.task('test', function () {
  runSequence('jest');
  gulp.watch(['scripts/*.js','__tests__/*.js'], ['jest'])
});