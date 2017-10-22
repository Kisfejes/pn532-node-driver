const { EventEmitter } = require('events');
const i2c = require('i2c-bus');

class PN532 extends EventEmitter {
  constructor() {
    super();
    // initializing i2c
    this.wire = i2c.openSync(1);
  }

  getFirmwareVersion() {
    console.log('Getting firmware version...');
  }
}

module.exports = PN532;
