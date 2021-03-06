const generateTeam = team => {

    const generateManager = (manager) => {
        return `
        <div class="col mt-3">
            <div class="card center" style="width: 18rem;">
                <div class='card-header'>
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class='card-body'>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
        <div class="col mt-3">
            <div class="card center" style="width: 18rem;">
                <div class='card-header'>
                   <h2 class="card-title">${engineer.getName()}</h2>
                   <h2 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h2>
                </div>
                <div class='card-body'>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item"><i class="fab fa-github-square"></i>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    const generateIntern = (intern) => {
        return `
        <div class="col mt-3">
          <div class="card center" style="width: 18rem;">
                <div class='card-header'>
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h2 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h2>
                </div>
                <div class='card-body'>     
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item"><i class="fas fa-school"></i>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

const htmlArr = [];

htmlArr.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
htmlArr.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
htmlArr.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return htmlArr.join("");

};


module.exports = team => {

return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Visual Team Tracker</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron m-3 team-heading">
                <h1 class="text-center">Engineering Resources</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
                ${generateTeam(team)}
        </div>
    </div>
</body>
</html>
    `;}