/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    input = input.toLowerCase();
    let numRegex = /\d|\.|\//g;

    let numArr = input.match(numRegex);

    // if no numerical input default to 1
    if (!numArr) {
      return 1;
    }

    let indexOfSlash = numArr.indexOf("/");

    // handle whole number and decimal inputs
    if (indexOfSlash === -1) {
      return parseFloat(numArr.join(""));

      // handle Invalid Input (number starts with slash)
    } else if (indexOfSlash === 0) {
      return null;
    } else {
      // handle Invalid Input (double fraction)
      if (input.split("/").length > 2) {
        return null;
      }

      // handle fractional input
      let dividendArr = [];
      for (let i = 0; i < indexOfSlash; i++) {
        dividendArr.push(numArr[i]);
      }
      let dividend = parseFloat(dividendArr.join(""));

      let divisorArr = [];
      for (let i = indexOfSlash + 1; i < numArr.length; i++) {
        divisorArr.push(numArr[i]);
      }
      let divisor = parseFloat(divisorArr.join(""));
      return dividend / divisor;
    }

    //let result = parseFloat(input.match(numRegex).join(''));

    // let numbers = ["0","1","2","3","4","5","6","7","8","9",".","/"];
    // let letters = ["a","b","c","d","e","f","g"];

    //  let numString = "Your sandwich will be $5.00";

    //let result2 = numString.match(numRegex);

    //    let noNumRegex = /[a-z]/g;
    // let result3 = numString.match(noNumRegex);
  };

  /*
  this.getNum = function (input) {

        // Return early if no value and no unit provided
        if (!input) {
            return null
        }

        let number = input.split(/^([0-9/\.]*)([a-z]*)$/i)[1]
        let a = input.split(/^([0-9/\.]*)([a-z]*)$/i)[0]
        let b = input.split(/^([0-9/\.]*)([a-z]*)$/i)[2]

        // Check if division is necessary and assign quotient to number if valid
        const numParts = number.split('/')
        if (numParts.length > 1) {
            if (numParts.length > 2) {
                return null
            }
            number = numParts.reduce((a, v) => a / v)
        }

        // If no number provided, assume 1 unit
        if (number === '') {
            return 1
        }

        if (Number.isNaN(number) || number === Infinity) {
            return null
        }
console.log(a);
console.log(b);
        return +number
    }
  */

  this.getUnit = function(input) {
    input = input.toLowerCase();

    var result;

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
