const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calculations = {
    turns: 0,
    seconds: 0
  };
  calculations.turns = Math.pow(2, disksNumber) - 1;
  calculations.seconds = Math.floor(calculations.turns / (turnsSpeed / 3600));
  return calculations;
};
