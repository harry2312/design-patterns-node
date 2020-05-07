var PersonBuilder = require("./PersonBuilder");

// Employees
var sue = new PersonBuilder("Sue").makeEmployee(60).makeManager().build();
var bill = new PersonBuilder("Bill").makeEmployee(20).build();
var phil = new PersonBuilder("Phil").makeEmployee().build();

// Shoppers
var charles = new PersonBuilder("Charles")
  .addMoney(500)
  .addShopingList(["jeans", "sunglasses"])
  .build();
var tabbitha = new PersonBuilder("Tabbitha").addMoney(1000).build();

console.log(sue.toString());
console.log(bill.toString());
console.log(phil.toString());
console.log(charles.toString());
console.log(tabbitha.toString());
