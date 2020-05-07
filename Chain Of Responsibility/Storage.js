class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next - null;
  }

  lookInLocalInventory(itemName) {
    var index = this.inventory.map((v) => v.name).indexOf(itemName);
    return this.inventory[index];
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    const found = this.lookInLocalInventory(itemName);
    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        loation: this.name,
        deliveryTime: this.deliveryTime === 0 ? "now" : `${this.deliveryTime}`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `We do not carry ${itemName}`;
    }
  }
}

module.exports = Storage;
