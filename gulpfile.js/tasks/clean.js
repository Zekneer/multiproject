const del = require('del');

module.exports = () => {
  return del(['./static', './log.txt', './bundle']);
};
