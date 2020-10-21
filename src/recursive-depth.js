const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this); 
  }

  calculateDepth(value) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return 1;
      } else {
        return 1 + Math.max(...value.map(this.calculateDepth));
      }
    } else {
      return 0;
    }




    return calculateDepth(value);


  };

};