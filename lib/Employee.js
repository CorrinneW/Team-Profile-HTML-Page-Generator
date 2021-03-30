const inquirer = require('inquirer');

const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };    
};

function getName(name) {
    inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: 'Please enter employee name'
        })
        .then((data) => {
            name = data;
            return name;
        })
};

function getId(id) {};

function getEmail(email) {};

function getRole() {
    return 'Employee';
}

//need to export module