const calc = {
  add: function (a, b) {
    return Math.round((a + b) * 100) / 100;
  },
  subtract: function (a, b) {
    return Math.round((a - b) * 100) / 100;
  },
  divide: function (a, b) {
    if (b === 0) return "Can't divide by zero!";
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

module.exports = calc;
