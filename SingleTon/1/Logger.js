class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class SingleTon {
  constructor() {
    if (!SingleTon.instance) {
      SingleTon.instance = new Logger();
    }
  }

  getInstance() {
    return SingleTon.instance;
  }
}

module.exports = SingleTon;
