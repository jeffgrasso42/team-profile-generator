// DEPENDENCIES
const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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

const checkAddEmployee = () =>
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Would you like to add an Employee to this team?',
        name: 'choice',
      },
    ])
    .then(response => response.choice);

const getEmployeeType = () =>
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern'],
        name: 'type',
      },
    ])
    .then(response => response.type);

const getEmployee = employeeType => {
  const engineerQuestion = "Enter the Engineer's Github username:";
  const internQuestion = "Enter the name of the Intern's school:";
  let question;
  if (employeeType === 'Engineer') question = engineerQuestion;
  else question = internQuestion;
  const employee = inquirer
    .prompt([
      {
        employeeType: 'input',
        message: `Enter the ${employeeType}'s name`,
        name: 'name',
      },
      {
        employeeType: 'input',
        message: `Enter the ${employeeType}'s ID number`,
        name: 'id',
      },
      {
        employeeType: 'input',
        message: `Enter the ${employeeType}'s email address:`,
        name: 'email',
      },
      {
        employeeType: 'input',
        message: question,
        name: 'variableQuestion',
      },
    ])
    .then(response => {
      const { name, id, email, variableQuestion } = response;
      if (employeeType === 'engineer') return new Engineer(name, id, email, variableQuestion);
      else return new Intern(name, id, email, variableQuestion);
    });
  return employee;
};

module.exports = {
  manager: getManager,
  check: checkAddEmployee,
  type: getEmployeeType,
  employee: getEmployee,
};