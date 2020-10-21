const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultStr = '', additionStr = '',
    addRep = options.additionRepeatTimes,
    strRep = options.repeatTimes,
    addSep = options.additionSeparator,
    strSep = options.separator;
  if (options.addition === undefined) options.addition = '';
  if (strSep === undefined) strSep = '+';
  if (addSep === undefined) addSep = '|';
  if (strRep === undefined) strRep = 1;
  if (addRep === undefined) addRep = 1;
  for (let ii = 0; ii < addRep; ii++) {
    if (ii === addRep - 1) addSep = '';
    additionStr = `${additionStr}${options.addition}${addSep}`;
  }
  for (let i = 0; i < strRep; i++) {
    if (i === strRep - 1) strSep = '';
    resultStr = `${resultStr}${str}${additionStr}${strSep}`;
  }
  return resultStr;
}
function options(repeatTimes, separator, addition, additionRepeatTimes, additionSeparator) {
  this.repeatTimes = repeatTimes;
  this.separator = separator;
  this.addition = addition;
  this.additionRepeatTimes = additionRepeatTimes;
  this.additionSeparator = additionSeparator;
}