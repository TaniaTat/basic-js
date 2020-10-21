const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "number" || sampleActivity === undefined) return false;
  if (sampleActivity > 0 || sampleActivity === NaN) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let kt = Math.log10(sampleActivity/ MODERN_ACTIVITY);
  return Math.ceil(kt / k);
};
