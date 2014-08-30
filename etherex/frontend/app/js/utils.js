var crypto = require('crypto');
var units = require('./units');
var Ethereum = require("ethereumjs-lib");

var utils = {
  formatBalance: function(_b) {
    // var b = Ethereum.BigInteger(_b);
    // if (b.compareTo(units["Uether"].multiply(Ethereum.BigInteger("1000"))) > 0)
    //   return b.divide(units["Uether"]) + " " + Object.keys(units)[0];
    // for (i in units) {
    //   if (units[i].valueOf() != 1 && b.compareTo(units[i].multiply(Ethereum.BigInteger("100"))) >= 0) {
    //     return b.divide(units[i].divide(Ethereum.BigInteger("1000"))).divideAndRemainder(Ethereum.BigInteger("1000")) + " " + i
    //   }
    // }
    // return _b + " wei";

    if (_b > units[0] * 1000)
      return (_b / units[0]).toFixed(2) + " " + Object.keys(units)[0];
    for (i in units) {
      if (units[i] != 1 && _b >= units[i] * 100) {
        return ((_b / (units[i] / 1000)) / 1000).toFixed(2) + " " + i
      }
    }
    return parseFloat(_b) + " wei";
  },

  randomId: function() {
    return crypto.randomBytes(32).toString('hex');
  }
};

module.exports = utils;