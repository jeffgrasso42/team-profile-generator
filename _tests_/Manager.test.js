// DEPENDENCIES
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and officeNum properties', () => {
      // Assign/Act
      const manager = new Manager(
        'John Doe',
        '12345',
        'johndoe@example.com',
        '1'
      );

      // Assert
      expect(manager.name).toBe('John Doe');
      expect(manager.id).toBe('12345');
      expect(manager.email).toBe('johndoe@example.com');
      expect(manager.officeNum).toBe('1');
      expect(typeof manager).toBe('object');
    });
  });

  describe('getRole', () => {
    it('should return the role of the office manager', () => {
      // Assign/Act
      const manager = new Manager(
        'John Doe',
        '12345',
        'johndoe@example.com',
        '1'
      );

      // Assert
      expect(manager.getRole()).toBe('manager');
    });
  });
});
