const { src, dest } = require('gulp');

module.exports = () => {
  return src('./src/**/img/*').pipe(dest('./static/'));
};
