// DEPENDENCIES
// npm
const fs = require('fs');
const path = require('path');
// JS files
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
const prompts = require('./src/prompts');
// Functions
const getManager = prompts.manager;
const getEmployeeType = prompts.type;
const getEmployee = prompts.employee;
const checkAddEmployee = prompts.check;

// ASSIGNMENT CODE

// DATA
const employees = [];

// FUNCTIONS

const init = async () => {
  let addEmployee = true;
  console.log('Welcome to The Team--a profile generator to make team management easy\n');

  const manager = await getManager();
  employees.push(manager);
  console.log();

  while (addEmployee) {
    const employeeType = await getEmployeeType();
    console.log();
    const employee = await getEmployee(employeeType);
    console.log();
    employees.push(employee);
    addEmployee = await checkAddEmployee();
    console.log();
  }

  console.log(employees);
};

// INITIALIZATION
init();
