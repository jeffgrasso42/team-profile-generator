/**
 * Renders cards for each of the user input employees
 * @param {array} employees the array of user input employees
 */
module.exports = async employees => {
  let mainContent = '';
  employees.forEach(employee => {
    // data to be rendered
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();
    const role = employee.getRole();
    let employeeData;
    let roleIcon;

    switch (role) {
      case 'manager':
        employeeData = `Office number <span class='text-primary'>${employee.getOffice()}</span>`;
        roleIcon = '<i class="fa-solid fa-mug-hot"></i>';
        break;
      case 'engineer':
        employeeData = `GitHub: <span class='text-primary'>${employee.getGitHub()}</span>`;
        roleIcon = '<i class="fa-solid fa-glasses"></i>';
        break;
      case 'intern':
        employeeData = `School: ${employee.getSchool()}`;
        roleIcon = '<i class="fa-solid fa-user-graduate"></i>';
        break;
      default:
        employeeData = 'unkown';
        roleIcon = '<i class="fa-solid fa-question"></i>';
    }
    mainContent += `
<div class="card m-3" style="width: 18rem; box-shadow: 5px 5px 5px gray">
  <div class="card-header bg-primary text-white">
    <h3>${name}</h3>
    <h4>${roleIcon} ${role}</h4>
  </div>
  <div class="container px-2 py-4" style="background-color: #efefef">
    <ul class="list-group list-group-flush">
      <li class="list-group-item rounded">ID: ${id}</li>
      <li class="list-group-item rounded">Email: ${email}</li>
      <li class="list-group-item rounded">${employeeData}</li>
    </ul>
  </div>
</div>`;
  });
  return mainContent;
};
