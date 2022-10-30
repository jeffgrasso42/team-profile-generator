const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getRole() {
    return 'manager';
  }
  getOffice() {
    return this.officeNum;
  }
}

module.exports = Manager;
