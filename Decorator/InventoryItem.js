class InventoryItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${item.name} costs ${item.price}`);
  }
}

class GoldenInventoryItem {
  constructor(base) {
    this.name = `Golden ${base.name}`;
    this.price = 1000 + base.price;
  }
}

class DiamondInventoryItem {
  constructor(base) {
    this.name = `Diamond ${base.name}`;
    this.price = 1000 + base.price;
    this.cutsGlass = true;
  }
}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
