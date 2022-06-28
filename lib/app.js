const fs = require('fs');
const inquirer = require('inquirer');
const Manager= require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const Employee = require('./Employee.js');
const {
        writeFile,
        appendToHtml,
        htmlStartingTemplate,
        htmlEndingTemplate,
        generateManagerCard,
        generateEngineerCard,
        generateInternCard
        } = require('../utils/generateHtml.js')

const basicInfoQuestions = [
        {
                type: 'text',
                name: 'name',
                message: "Enter employee's name: ",
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log("Please enter Employee's name!");
                                return false
                        }
                }

        },
        {
                type: 'text',
                name: 'id',
                message: "Enter the employee's ID: ",
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log("Please enter Employee's Id!")
                                return false
                        }
                }
        },
        {
                type: 'text',
                name: 'email',
                message: "Enter the empoyee's email: ",
                validate: nameInput => {
                        if (nameInput) {
                                return true;
                        } else {
                                console.log("Please enter Employee's email!")
                                return false
                        }
                }
        }
]
const managerQuestions = {
        type: 'text',
        name: 'officeNumber',
        message: "Enter manager's office number: ",
        validate: nameInput => {
                if (nameInput) {
                        return true;
                } else {
                        console.log("Please enter manager's office number!")
                        return false
                }
        }
}
const engineerQuestions = {
        type: 'text',
        name: 'gitHub',
        message: "Enter engineer's gitHub username: ",
        validate: nameInput => {
                if (nameInput) {
                        return true;
                } else {
                        console.log("Please enter engineer's gitHub username!")
                        return false
                }
        }
}
const internQuestions = {
        type: 'text',
        name: 'school',
        message: "Entern intern's school: ",
        validate: nameInput => {
                if (nameInput) {
                        return true;
                } else {
                        console.log("Please enter intern's school!")
                        return false
                }
        }
}
class app {
        initializeApp() {
                inquirer
                .prompt([{
                        type: 'confirm',
                        name: 'Welcome',
                        message: "Welcome to Team Profile Generator. Do you want to add the Manager's info? "
                }
                ])
                .then((answers) => {
                        if (answers.Welcome) {
                                writeFile(htmlStartingTemplate);
                                this.addManager();
                        } else {
                                this.selectEmployeeType();
                        }
                })
        }
        async addManager() {
                await inquirer
                        .prompt(basicInfoQuestions.concat(managerQuestions))
                        .then(({name, id, email, officeNumber}) => {
                                const manager = new Manager(name, id, email, officeNumber);
                                console.log(manager)
                                appendToHtml(generateManagerCard(manager));
                        })
                        this.selectEmployeeType();
        }
        async addEngineer() {
                await inquirer
                        .prompt(basicInfoQuestions.concat(engineerQuestions))
                        .then(({name, id, email, gitHub}) => {
                                const engineer = new Engineer(name, id, email, gitHub);
                                console.log(engineer);
                                appendToHtml(generateEngineerCard(engineer));
                        })
                        this.selectEmployeeType();
        }
        async addIntern() {
                await inquirer
                        .prompt(basicInfoQuestions.concat(internQuestions))
                        .then(({name, id, email, school}) => {
                                const intern = new Intern(name, id, email, school);
                                console.log(intern);
                                appendToHtml(generateInternCard(intern));
                        })
                        this.selectEmployeeType();
        }
        async selectEmployeeType() {
                await inquirer
                        .prompt({
                                type: 'list',
                                name: 'nextAction',
                                message: "What would you like to do next?",
                                choices: ['Add an engineer.', 'Add an intern.', 'Finish building Team.']
                        })
                        .then(({nextAction}) => {
                                console.log(nextAction)
                                switch(nextAction) {
                                        case 'Add an engineer.':
                                                this.addEngineer();
                                                break;
                                        case 'Add an intern.':
                                                this.addIntern();
                                                break;
                                        case 'Finish building Team.':
                                                appendToHtml(htmlEndingTemplate);
                                                console.log("All employeees were added to team roster.");
                                                break;
                                       }
                        })
        }
}
module.exports = app;