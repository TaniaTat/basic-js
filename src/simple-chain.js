const CustomError = require("../extensions/custom-error");

const chainMaker = {  
  inputChain: [],
  getLength: function() {
    return this.inputChain.length;
  },
  addLink: function(value) {
    if (value === undefined) value = ' ';
    value = `( ${value} )~~`;
    this.inputChain.push(value);
    return this;
  },
  removeLink: function(position) {
    if (!typeof position === "number" || position % 1 !== 0 || position > this.getLength) {this.inputChain = []; throw "Error";};
    this.inputChain.splice(position-1, 1);
    return this;
  },
  reverseChain: function() {
    this.inputChain.reverse();
    return this;
  },
  finishChain: function() {
    let str = this.inputChain.join("").toString().slice(0, -2); 
    this.inputChain = [];
    return str;
  }
};

module.exports = chainMaker;
