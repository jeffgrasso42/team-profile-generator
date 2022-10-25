// DEPENDENCIES
const Employee = require('../lib/Employee');

describe('Employee Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id & email properties', () => {
      // Assign/Act
      const employee = new Employee('John', '12345', 'employee@example.com');

      // Assert
      expect(employee.name).toBe('John');
      expect(employee.id).toBe('12345');
      expect(employee.email).toBe('employee@example.com');
      expect(typeof employee).toBe('object');
    });
  });

  describe('getName', () => {
    it('should return the name of the employee', () => {
      // Assign/Act
      const employee = new Employee('John', '12345', 'employee@example.com');

      // Assert
      expect(employee.getName()).toBe('John');
    });
  });

  describe('getId', () => {
    it('should return the ID of the employee', () => {
      // Assign/Act
      const employee = new Employee('John', '12345', 'employee@example.com');

      // Assert
      expect(employee.getId()).toBe('12345');
    });
  });

  describe('getEmail', () => {
    it('should return the email address of the employee', () => {
      // Assign/Act
      const employee = new Employee('John', '12345', 'employee@example.com');

      // Assert
      expect(employee.getEmail()).toBe('employee@example.com');
    });
  });

  describe('getEmail', () => {
    it('should return the role of the employee', () => {
      // Assign/Act
      const employee = new Employee('John', '12345', 'employee@example.com');

      // Assert
      expect(employee.getRole()).toBe('employee');
    });
  });
});
