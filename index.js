const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const inquirer = require('inquirer');

//global array holds all team members added
const myTeam = [];

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
    console.log(myTeam)
};

//allows user to add as many engineers and interns as they like
function addEmployee() {
    inquirer.prompt ({
        type: 'checkbox',
        name: 'addEmployee',
        message: 'Would you like to add a new team member?',
        choices: ['Add a new Engineer', 'Add a new Intern', "I'm done. Finish building my team."]
    })
    .then(response => {
        console.log(response)
        // if (response === ['Add a new Engineer']) {
        //     newEngineer();
        // } else if (response === ['Add a new Intern']) {
        //     newIntern();
        // } else if (response === ["I'm done. Finish building my team."]) {
        //     buildHTML();
        // } else {
        //     addEmployee();
        // }
    })
};

//function to fill in engineer info
function newEngineer() {
    const engineerQuestion = {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username"
    };
    
    //adds EngineerQuestion to the questions array before it is prompted by inquirer
    questions.push(engineerQuestion);

    console.log("Please enter the engineer's information:")

    inquirer
        .prompt(questions)
        .then(data => {
            const newEngineer = new Engineer(data.firstLastName, data.id, data.email, data.github);
            myTeam.push(newEngineer);

            addEmployee();
        });
};

//function to fill in intern info
function newIntern() {
    const internQuestion = {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school"
    };
    
    //adds internQuestion to the questions array before it is prompted by inquirer
    questions.push(internQuestion);

    console.log("Please enter the intern's information:")

    inquirer
        .prompt(questions)
        .then(data => {
            const newIntern = new Intern(data.firstLastName, data.id, data.email, data.school);
            myTeam.push(newIntern);

            addEmployee();
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

            addEmployee();
        });
};


function init() {
    console.log("Welcome to the Team Profile Generator! Start by entering your team manager's information:")
    newManager();
};

init();



