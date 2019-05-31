/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    // input = input.toLowerCase();
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
  };

  this.getUnit = function(input) {
    let letterRegex = /[a-z]|[A-Z]/g;
    let letterArr = input.match(letterRegex);

    // if no unit input return null
    if (!letterArr) {
      return null;
    }

    let result = letterArr.join("");
    let indexOfSlash = letterArr.indexOf(result);

    // handle unknown units
    const allowedUnits = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG"
    ];
    if (allowedUnits.indexOf(result) === -1) {
      return null;
    }

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
