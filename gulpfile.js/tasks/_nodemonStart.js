const nodemon = require('gulp-nodemon');
const { reload } = require('../config/options');

module.exports = (done) => {
  let running = false;

  return nodemon({
    script: './app.js',
    watch: [
      './app.js',
      './controllers/**/*',
      './config/**/*',
      './models/**/*',
      './routes/**/*',
      './views/**/*',
    ],
  })
    .on('start', () => {
      if (!running) done();
      running = true;
    })
    .on('restart', () => {
      setTimeout(() => {
        reload();
      }, 500);
    });
};
