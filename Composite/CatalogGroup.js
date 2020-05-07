class CatalogGroup {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }

  get total() {
    return this.data.reduce((total, next) => total + next.total, 0);
  }

  print() {
    console.log(this.name);
    this.data.forEach((element) => element.print());
  }
}

module.exports = CatalogGroup;
