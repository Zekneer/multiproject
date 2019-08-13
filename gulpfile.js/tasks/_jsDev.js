const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const { src, dest } = require('gulp');
const tap = require('gulp-tap');

module.exports = () => {
  return src('./src/**/scripts/*.js', { read: false })
    .pipe(
      tap((file) => {
        file.contents = browserify(file.path, {
          debug: true,
        }).bundle();
      }),
    )
    .pipe(buffer())
    .pipe(dest('./static/'));
};
