const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = () => {
  return src('./src/**/img/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true, optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true, arithmetic: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ]),
    )
    .pipe(dest('./bundle/static/'));
};
