// DEPENDENCIES
const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and gitHub properties', () => {
      // Assign/Act
      const engineer = new Engineer(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'https://github.com/johndoe'
      );

      // Assert
      expect(engineer.name).toBe('John Doe');
      expect(engineer.id).toBe('12345');
      expect(engineer.email).toBe('johndoe@example.com');
      expect(engineer.gitHub).toBe('https://github.com/johndoe');
      expect(typeof engineer).toBe('object');
    });
  });

  describe('getGitHub', () => {
    it("should return the url of the engineer's GitHub profile", () => {
      // Assign/Act
      const engineer = new Engineer(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'https://github.com/johndoe'
      );

      // Assert
      expect(engineer.getGitHub()).toBe('https://github.com/johndoe');
    });
  });

  describe('getRole', () => {
    it('should return the role "engineer"', () => {
      // Assign/Act
      const engineer = new Engineer(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'https://github.com/johndoe'
      );

      // Assert
      expect(engineer.getRole()).toBe('engineer');
    });
  });
});
