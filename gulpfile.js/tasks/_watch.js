const { watch } = require('gulp');
const { reload } = require('../config/options');
const _cssDev = require('./_cssDev');
const _jsDev = require('./_jsDev');
const _imgDev = require('./_imgDev');

module.exports = () => {
  watch('./static/**/styles/*').on('change', reload);
  watch('./static/**/scripts/*').on('change', reload);
  watch('./static/**/img/*').on('change', reload);
  watch('./views/**/*').on('change', reload);
  watch('./src/**/styles/**/*', _cssDev);
  watch('./src/**/scripts/**/*', _jsDev);
  watch('./src/**/img/**/*', _imgDev);
};
