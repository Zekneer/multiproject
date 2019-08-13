const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const normalizePaths = require('scss-resets').includePaths;

module.exports = () => {
  return src('./src/**/styles/*.scss')
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
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(
      clean({
        compatibility: '*',
        level: 1,
      }),
    )
    .pipe(dest('./bundle/static/'));
};
