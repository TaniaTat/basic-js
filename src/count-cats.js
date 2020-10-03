const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var number = 0;
  for (i = 0; i < matrix.length; i++) {
    matrix[i].forEach( (value) => {
      if (value === "^^") {number++;};
    });
  }
  return number;
};
