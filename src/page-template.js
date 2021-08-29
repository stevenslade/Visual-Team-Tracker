
const generateTeam = team => {

    const generateManager = (manager) => {
        return `
        <h2 class="card-title">${manager.getName()}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
        <h2 class="card-title">${engineer.getName()}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
        </ul>
        `;
    };


    const generateIntern = (intern) => {
        return `
        <h2 class="card-title">${engineer.getName()}</h2>
        <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
        </ul>
        `;
    };

const htmlArr = [];

htmlArr.push(
    team
    .filter((employee) => employee.role === 'manager' )
    .map((manager) => generateManager(manager))
    .join("")
);

htmlArr
    .push(team.filter((employee) => employee.role === 'manager' )
    .map((manager) => generateManager(manager))
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
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;}