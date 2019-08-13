const del = require('del');

module.exports = () => {
  return del(['./bundle/*']);
};
