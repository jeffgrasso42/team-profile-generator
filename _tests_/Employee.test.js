const Employee = require('../lib/Employee');
test('Employee test sheet', () => {
  const employee = new Employee('John', '12345', 'employee@example.com');
  expect(employee.name).toBe('John');
  expect(employee.id).toBe('12345');
  expect(employee.email).toBe('employee@example.com');

  expect(employee.getName()).toBe('John');
  expect(employee.getId()).toBe('12345');
  expect(employee.getEmail()).toBe('employee@example.com');

  expect(typeof employee).toBe('object');
  expect(employee.getRole()).toBe('employee');
});
