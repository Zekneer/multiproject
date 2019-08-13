const { series } = require('gulp');
const dev = require('./dev');
const _nodemonStart = require('./_nodemonStart');
const _browserSyncInit = require('./_browserSyncInit');
const _watch = require('./_watch');

module.exports = series(dev, _nodemonStart, _browserSyncInit, _watch);
