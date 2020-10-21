const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) { throw "Error"; };
    let newArr = [], prevValue = '';
    const ctrlSeq = "--discard-next, --discard-prev, --double-next, --double-prev, undefined";
    arr.map(makeNewArr);
    newArr = newArr.filter((value) => {
      if (!ctrlSeq.includes(value)) return `${value}`;
    });
    return newArr;
  
    function makeNewArr(value, i) {
      if (value === '--discard-next') {
        prevValue = null;
      } else {
          if (value === '--discard-prev') {
              if (newArr !== []) {
                newArr.pop();
                prevValue = newArr[newArr.length-1];
              }
          } else {
            if (value === '--double-next') {
              if (arr[i+1] !== undefined) {
                newArr.push(arr[i+1]);
              }
            } else {
                if (value === '--double-prev') {
                  if (newArr !== []) {
                    newArr.push(prevValue);
                  };
                } else {
                    if (prevValue !== null) {
                        newArr.push(value);
                        prevValue = value;                         
                    } else {
                        prevValue = newArr[newArr.length-1];
                    };
                };
            };
          }
      }
    };
};


