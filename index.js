const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const inquirer = require('inquirer');

//global array holds data for all team members added
const myTeam = [];
//global array holds template literals for each team card created in generateCards function
const teamCards = [];

//inquirer prompts give data to classes
//questions array contains basic info questions that will be used for all Employee classes
const questions = [
    {
        type: 'input',
        name: 'firstLastName',
        message: 'Please enter first and last name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email'
    },
];

//builds HTML from data received
function buildHTML() {
    const managerName = myTeam[0].name.replace(/\s+/g, '-').toLowerCase();
    const fileName = `${managerName}-team.html`;

    const fileContent = `<!DOCTYPE html>
    <html lang='en-us'>
    
    <head>
        <title>My Team</title>
        <meta charset='utf-8'>
        <meta name='viewport' content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css'>
        <link rel='stylesheet' href='src/style.css'>
    </head>
    
    <body>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                    My Team
                </p>
            </div>
        </section>
    
        <div class="container" id="card-container">
            <div class='tile is-ancestor'>
                <div class='tile is-10'>
                    <div class='tile'>
                        ${teamCards}
                    </div>
                </div>
            </div>
        </div>
    
    
    </body>
    <script src="https://kit.fontawesome.com/4785eac3cb.js" crossorigin="anonymous"></script>
    <script src='/index.js'></script>
    
    </html>`;

    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success!')
        }
    })
};

//icons for different roles
const iconsArr = [
    {
        name: 'Manager',
        value: `<i class="fas fa-mug-hot"></i>`
    },
    {
        name: 'Engineer',
        value: `<i class="fas fa-glasses"></i>`
    },
    {
        name: 'Intern',
        value: `<i class="fas fa-user-graduate"></i>`
    },
]

//builds profile cards for each team member
function generateCards() {
    //for each team member in myTeam array, generate a template literal with their info
    for (const member of myTeam) {
        //get role of current member
        const role = member.getRole();
        //assign icons and special category for each role
        let icon;
        let special;

        if (role === 'Manager') {
            icon = iconsArr[0].value;
            special = `Office Number: ${member.officeNumber}`;
        } else if (role === 'Engineer') {
            icon = iconsArr[1].value;
            special = `GitHub: ${member.getGithub()}`;
        } else if (role === 'Intern') {
            icon = iconsArr[2].value;
            special = `School: ${member.school}`;
        } else {
            icon = '';
            special = '';
        }
        //build template literal
        const memberCard = `<div class='tile is-parent is-4 is-vertical is-box'>
        <div class='tile is-child'>
            <article class='has-background-info' id='card-header'>
                <p class='title has-text-white'>
                    ${member.name}
                </p>
                <p class='subtitle has-text-white'>
                    ${icon} ${role}
                </p>
            </article>
            <div id='card-body'>
                <div class='box' id='card-info'>
                    <div class='content'>
                        <p>
                            ID: ${member.id}
                        </p>
                    </div>
                    <div class='content'>
                        <p>
                            Email: ${member.getEmail()}
                        </p>
                    </div>
                    <div class='content'>
                        <p>
                            ${special}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

        teamCards.push(memberCard)
    }
    buildHTML();
}

//function to fill in engineer info
function newEngineer() {
    const engineerQuestion = {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username"
    };

    //removes any question specific to other two roles.
    questions.pop(questions[3])
    //adds EngineerQuestion to the questions array before it is prompted by inquirer
    questions.push(engineerQuestion);

    console.log("Please enter the engineer's information:")

    inquirer
        .prompt(questions)
        .then(data => {
            const newEngineer = new Engineer(data.firstLastName, data.id, data.email, data.github);
            myTeam.push(newEngineer);

            buildTeam();
        })
        .catch(error => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment.")
            } else {
                console.error("Something else went wrong.")
            }
        });
};

//function to fill in intern info
function newIntern() {
    const internQuestion = {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school"
    };

    //removes any question specific to other two roles.
    questions.pop(questions[3])
    //adds internQuestion to the questions array before it is prompted by inquirer
    questions.push(internQuestion);

    console.log("Please enter the intern's information:")

    inquirer
        .prompt(questions)
        .then(data => {
            const newIntern = new Intern(data.firstLastName, data.id, data.email, data.school);
            myTeam.push(newIntern);

            buildTeam();
        })
        .catch(error => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment.")
            } else {
                console.error("Something else went wrong.")
            }
        });
};

//choices for buildTeam function
const roleArr = [
    {
        name: "Add an Engineer",
        value: 'engineer'
    },
    {
        name: "Add an Intern",
        value: 'intern'
    },
    {
        name: "I'm done. Finish building my team.",
        value: 'done'
    }
]

//allows user to add as many engineers and interns as they like, then finish and build html document with data
function buildTeam() {
    inquirer
        .prompt({
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add a new team member?',
            choices: roleArr
        })
        .then(data => {
            if (data.addEmployee === 'engineer') {
                newEngineer();
            } else if (data.addEmployee === 'intern') {
                newIntern();
            } else if (data.addEmployee === 'done') {
                generateCards();
            } else {
                buildTeam();
            }
        })
        .catch(error => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment.")
            } else {
                console.error("Something else went wrong.")
            }
        });
};

//add a team manager
function newManager() {
    const managerQuestion = {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter team manager's office number"
    };

    //adds managerQuestion to the questions array before it is prompted by inquirer
    questions.push(managerQuestion);

    inquirer
        .prompt(questions)
        .then(data => {
            const newManager = new Manager(data.firstLastName, data.id, data.email, data.officeNumber);
            myTeam.push(newManager);

            buildTeam();
        })
        .catch(error => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment.")
            } else {
                console.error("Something else went wrong.")
            }
        });
};


function init() {
    console.log("Welcome to the Team Profile Generator! Start by entering your team manager's information:")
    newManager();
};

init();



