const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = [];
  if (!Array.isArray(members)) return false;
  members.forEach((element) => {
    if (typeof element === "string") res.push(element.trim().split("")[0]);
  });
  return res
    .map((i) => i.toUpperCase())
    .sort()
    .join("");
};
