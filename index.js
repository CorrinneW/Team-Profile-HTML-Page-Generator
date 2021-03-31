const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const inquirer = require('inquirer');

//inquirer prompts give data to classes

//build html content using inquirer data and template literal

// //questions for inquirer prompt
// const questions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter employee name'
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Please enter employee ID'
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Please enter employee email'
//     }
// ];

// //global object to hold answers to inquirer prompt
// const answers = {};



// function init() {
//     inquirer
//         .prompt(questions)
//         .then(data => {
//             //add data to global object
//             const returnedAnswers = Object.assign(answers, data);
//             getName(returnedAnswers.name);
//             getId(returnedAnswers.id);
//             getEmail(returnedAnswers.email);
//             getRole();
//         })
// }

// init();



