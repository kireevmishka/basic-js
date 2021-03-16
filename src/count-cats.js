const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  for (let elem of matrix) {
    elem.forEach((element) => {
      if (element === "^^") {
        res++;
      }
    });
  }
  return res;
};
