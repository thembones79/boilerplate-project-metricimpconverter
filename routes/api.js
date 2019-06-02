/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input.trim();
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    if (initNum === null && initUnit === null) {
      res.send("invalid number and unit");
    }

    if (initNum === null) {
      res.send("invalid number");
    }

    if (initUnit === null) {
      res.send("invalid input unit");
    }

    res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
  });
};
