var Shopper = require("./Shopper");
var Employee = require("./Employee");

function useFactory(name, pay = 0, type, text) {
  if (type == "employee") {
    return new Employee(name, pay, text);
  } else {
    return new Shopper(name, pay);
  }
}

module.exports = useFactory;
