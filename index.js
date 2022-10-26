// DEPENDENCIES
// npm
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// JS files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// ASSIGNMENT CODE

// DATA
const employees = [];

// FUNCTIONS

const init = async () => {
  console.log(
    'Welcome to "The Team," a profile generator to make team management easy'
  );
  const manager = await getManager();
  employees.push(manager);
  console.log(employees);
  const employeesAdded = await getEmployees();
};

// USER INTERACTIONS
const getManager = () => {
  const manager = inquirer
    .prompt([
      {
        type: 'input',
        message: "Enter the name of your team's Manager",
        name: 'name',
      },
      {
        type: 'input',
        message: "Enter the Manager's employee ID number",
        name: 'id',
      },
      {
        type: 'input',
        message: "Enter the Manager's email address",
        name: 'email',
      },
      {
        type: 'input',
        message: "Enter the office number of the Manager's office",
        name: 'officeNum',
      },
    ])
    .then(response => {
      const { name, id, email, officeNum } = response;
      const managerObj = new Manager(name, id, email, officeNum);
      return managerObj;
    });
  return manager;
};

const getEmployees = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'How many Employees does this manager oversee:',
        name: 'count',
      },
    ])
    .then(response => {
      const count = parseInt(response.count);
      for (let i = 0; i < count; i++) {
        inquirer.prompt([]);
      }
    });
};

// INITIALIZATION
init();
