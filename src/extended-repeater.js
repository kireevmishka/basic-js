const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = [];
  let temp = [];
  if (options.repeatTimes == undefined && str) {
    res.push(String(str));
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      res.push(String(str));
    }
  }
  if (options.additionRepeatTimes == undefined && options.addition) {
    temp.push(String(options.addition));
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      temp.push(String(options.addition));
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (!options.additionSeparator) {
      res[i] += temp.join("|");
    } else {
      res[i] += temp.join(options.additionSeparator);
    }
  }

  if (!options.separator) {
    return res.join("+");
  } else {
    return res.join(options.separator);
  }
};
