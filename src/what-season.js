const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) != "[object Date]")
    throw new Error();
  let res = date.getMonth();
  if (res == 11 || res <= 1) return "winter";
  if (res <= 4) return "spring";
  if (res <= 7) return "summer";
  if (res <= 10) return "fall";
};
