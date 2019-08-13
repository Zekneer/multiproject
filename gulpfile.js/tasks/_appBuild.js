const { src, dest } = require('gulp');

module.exports = () => {
  return src(
    [
      './config/**/*',
      './controllers/**/*',
      './models/**/*',
      './routes/**/*',
      './views/**/*',
      './app.js',
      './package.json',
      './package-lock.json',
    ],
    { base: './' },
  ).pipe(dest('./bundle'));
};
