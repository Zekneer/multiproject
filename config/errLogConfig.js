const fs = require('fs');

function formatNumberZeros(number, length) {
  const lengthDiff = length - String(number).length;
  let zeros = '';
  if (lengthDiff > 0) {
    for (let i = 0; i < lengthDiff; i += 1) {
      zeros += '0';
    }
  }
  return zeros + number;
}

function getFullErrMsg(errMsg) {
  const date = new Date();

  const year = date.getFullYear();
  const month = formatNumberZeros(date.getMonth(), 2);
  const day = formatNumberZeros(date.getDate(), 2);
  const hours = formatNumberZeros(date.getHours(), 2);
  const minutes = formatNumberZeros(date.getMinutes(), 2);
  const seconds = formatNumberZeros(date.getSeconds(), 2);
  const milliseconds = formatNumberZeros(date.getMilliseconds(), 3);

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}:${milliseconds} Error: ${errMsg}\n`;
}

function logErr(errMsg) {
  const errFullMsg = getFullErrMsg(errMsg);

  fs.appendFile('./log.txt', errFullMsg, (errAppend) => {
    if (errAppend) {
      fs.writeFile('./log.txt', 'utf8', (errWrite) => {
        if (!errWrite) {
          logErr(errFullMsg);
        }
      });
    }
  });
}

module.exports = logErr;
