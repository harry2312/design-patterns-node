var Person = require("./Person");

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee(hours = 0) {
    this.isEmployee = true;
    this.hours = hours;
    return this;
  }

  makeManager() {
    this.isManager = true;
    return this;
  }

  addMoney(money = 0) {
    this.money = money;
    return this;
  }

  addShopingList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

module.exports = PersonBuilder;