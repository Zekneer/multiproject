const { browserSync } = require('../config/options');

module.exports = (done) => {
  browserSync.init(
    {
      proxy: {
        target: 'http://localhost:3000/',
        middleware: function(req, res, next) {
          console.log(req.url);
          next();
        },
      },
      port: 3020,
      injectChanges: false,
      host: 'localhost',
    },
    done,
  );
};
