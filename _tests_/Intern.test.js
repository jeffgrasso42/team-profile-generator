// DEPENDENCIES
const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and gitHub properties', () => {
      // Assign/Act
      const intern = new Intern(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'Columbia'
      );

      // Assert
      expect(intern.name).toBe('John Doe');
      expect(intern.id).toBe('12345');
      expect(intern.email).toBe('johndoe@example.com');
      expect(intern.gitHub).toBe('Columbia');
      expect(typeof intern).toBe('object');
    });
  });

  describe('getSchool', () => {
    it("should return the name of the intern's school", () => {
      // Assign/Act
      const intern = new Intern(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'Columbia'
      );

      // Assert
      expect(intern.getSchool()).toBe('Columbia');
    });
  });

  describe('getRole', () => {
    it('should return the role "intern"', () => {
      // Assign/Act
      const intern = new Intern(
        'John Doe',
        '12345',
        'johndoe@example.com',
        'Columbia'
      );

      // Assert
      expect(intern.getRole()).toBe('intern');
    });
  });
});
