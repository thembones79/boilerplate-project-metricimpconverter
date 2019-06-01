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
    const units = {
      gal: "l",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs"
    };
    initUnit = initUnit.toLowerCase();
    return units[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const units = {
      gal: "gallon",
      l: "liter",
      mi: "mile",
      km: "kilometer",
      lbs: "pound",
      kg: "kilogram"
    };
    unit = unit.toLowerCase();
    return units[unit];
  };

  this.convert = function(initNum, initUnit) {
    const converts = {
      gal: 3.78541,
      lbs: 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934,
      kg: 1 / 0.453592,
      l: 1 / 3.78541
    };

    var result = initNum * converts[initUnit];

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`;
  };
}

module.exports = ConvertHandler;
