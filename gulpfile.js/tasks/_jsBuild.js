const browserify = require('browserify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const tap = require('gulp-tap');

module.exports = () => {
  return src('./src/**/index/*.js', { read: false })
    .pipe(
      tap((file) => {
        file.contents = browserify(file.path).bundle();
      }),
    )
    .pipe(buffer())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify({ compress: true }))
    .on('error', log.error)
    .pipe(dest('./bundle/static/'));
};
