const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next" || arr[i - 1] == "--discard-next") {
      if (i + 1 == arr.length) return res;
      continue;
    }

    if (arr[i] == "--discard-prev") {
      if (i == 0) continue;
      if (arr[i - 2] == "--discard-next") continue;
      res.pop();
      continue;
    }

    if (arr[i] == "--double-next") {
      if (i + 1 == arr.length) return res;
      res.push(arr[i + 1]);
      continue;
    }

    if (arr[i] == "--double-prev") {
      if (i == 0) continue;
      if (arr[i - 2] == "--discard-next") continue;
      res.push(arr[i - 1]);
      continue;
    }

    res.push(arr[i]);
  }
  return res;
};
