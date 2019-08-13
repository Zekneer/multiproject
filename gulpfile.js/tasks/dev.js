const { series, parallel } = require('gulp');
const _cleanDev = require('./_cleanDev');
const _cssDev = require('./_cssDev');
const _jsDev = require('./_jsDev');
const _imgDev = require('./_imgDev');

module.exports = series(_cleanDev, parallel(_cssDev, _jsDev, _imgDev));
