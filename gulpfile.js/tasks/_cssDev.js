const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const normalizePaths = require('scss-resets').includePaths;

module.exports = () => {
  return src('./src/**/styles/*.scss', { sourcemaps: true })
    .pipe(
      sass({
        outputStyle: 'nested',
        includePaths: normalizePaths,
      }).on('error', sass.logError),
    )
    .pipe(
      rename((path) => {
        path.extname = '.min.css';
      }),
    )
    .pipe(dest('./static/', { sourcemaps: true }));
};
