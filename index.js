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
  let addEmployee = true;
  console.log('Welcome to "The Team," a profile generator to make team management easy');
  const manager = await getManager();
  employees.push(manager);
  console.log(manager);
  console.log(employees);
  console.log();
  while (addEmployee) {
    const employeeType = getEmployeeType();
    const employee = getEmployee(employeeType);
    employees.push(employee);
    addEmployee = checkAddEmployee();
  }
};

// USER INTERACTIONS
const getManager = () =>
  inquirer
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

const checkAddEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Would you like to add an Employee to this team?',
        name: 'choice',
      },
    ])
    .then(response => response.choice);
};

const getEmployeeType = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern'],
        name: 'count',
      },
    ])
    .then(response => {
      const count = parseInt(response.count);
      for (let i = 0; i < count; i++) {
        inquirer.prompt([{}]);
      }
    });
};

const getEmployee = type => {
  internQuestions = {
    name: 
  }
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern'],
        name: 'count',
      },
      {
        type: 'input',
        message: "Enter the Employee's ID number",
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
    .then(response => {})
};

// INITIALIZATION
init();
