// DEPENDENCIES
// npm
const fs = require('fs');
// JS files
const prompts = require('./src/prompts');
// Functions
const getManager = prompts.manager;
const getEmployeeType = prompts.type;
const getEmployee = prompts.employee;
const checkAddEmployee = prompts.check;
const getMainContent = require('./src/getMainContent');

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
  const content = await getMainContent(employees);

  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <title>Team Maker</title>
    </head>
    <body>
      <header class="fluid bg-danger p-1"><h1 class="display-4 text-white text-center">My Team</h1></header>
      <main id='main' class="container-fluid d-flex flex-wrap justify-content-center p-3">
        ${content}
      </main>
    </body>
  </html>
  `;

  createHTMLFile(html);
};

const createHTMLFile = html =>
  fs.writeFile('./dist/index.html', html, err => (err ? console.log(err) : console.log('index.html created')));

// INITIALIZATION
init();
