const browserSync = require('browser-sync').create();

module.exports.browserSync = browserSync;
module.exports.reload = browserSync.reload;
