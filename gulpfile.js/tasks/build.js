const { series, parallel } = require('gulp');
const _cleanBuild = require('./_cleanBuild');
const _cssBuild = require('./_cssBuild');
const _jsBuild = require('./_jsBuild');
const _imgBuild = require('./_imgBuild');
const _appBuild = require('./_appBuild');

module.exports = series(
  _cleanBuild,
  parallel(_cssBuild, _appBuild, _jsBuild, _imgBuild),
);
