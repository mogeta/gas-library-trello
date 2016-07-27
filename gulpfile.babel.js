import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
// import runSequence from 'run-sequence'
//var runSequence = require('run-sequence');

const $ = gulpLoadPlugins()
const src_es2015_file = 'dev/**/*.es6'

gulp.task('gas-upload', ['browserify'], () =>
  gulp.src('.')
    .pipe($.exec('gapps upload'))
)

gulp.task('test', () =>
  gulp.src(['test/**/*.es6'], { read: false })
    .pipe($.mocha({ reporter: 'spec' }))
)

gulp.task('browserify', ['test'], () =>
  browserify({
    entries: ['dev/main.es6']
  }).transform('babelify')
    .plugin('gasify')
    .bundle()
    .pipe(source('trello.js'))
    .pipe(gulp.dest('src'))
)

gulp.task('watch', () =>
  gulp.watch(src_es2015_file, ['test', 'browserify', 'gas-upload'])
)


// var gulp = require("gulp");
// var babel = require("gulp-babel");
// import gulp from 'gulp'
// import gulpLoadPlugins from 'gulp-load-plugins'
// import browserify from 'browserify'
// import source from 'vinyl-source-stream'
// import runSequence from 'run-sequence'
//
// gulp.task('babel', function() {
//   gulp.src('./*.es6')
//     .pipe(babel())
//     .pipe(gulp.dest('./src'))
// });
//
// gulp.task('watch', function() {
//   gulp.watch('./*.es6', ['babel'])
// });
//
// gulp.task('default', ['babel', 'watch']);
