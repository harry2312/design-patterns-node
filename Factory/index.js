var useFactory = require("./factory");

var alex = useFactory("Alex Banks", 100);
var eve = useFactory("Eve Porcello", 100, "employee", "This and That");
eve.payDay(150)

console.log(alex.toString());
console.log(eve.toString());
