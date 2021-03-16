const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    Number(sampleActivity) > 15 ||
    Number(sampleActivity) <= 0 ||
    typeof sampleActivity != "string" ||
    isNaN(sampleActivity)
  )
    return false;
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
      (0.693 / HALF_LIFE_PERIOD)
  );
};
