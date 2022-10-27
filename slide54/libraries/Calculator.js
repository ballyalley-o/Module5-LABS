//const moment = require("moment");
//const colors = require("colors");
const generateUniqueId = require("generate-unique-id");


class Calculator {
  constructor() {
    this.id = generateUniqueId({
      length: 6,
    });;
  }
  #log = (value) => {
    console.log(`[Calculator]:${this.id}:[${value}]`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  substract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;
