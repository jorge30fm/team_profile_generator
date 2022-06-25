const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
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
                                this.promptUser();
                        } else {
                                console.log('nope')
                        }
                // Use user feedback for... whatever!!
                })

        }
        promptUser() {
                inquirer
                        .prompt([
                                {
                                        type: 'text',
                                        name: 'name',
                                        message: "Enter employee's name"
                                },
                                {
                                        type: 'text',
                                        name: 'id',
                                        message: "Enter the employee's ID"
                                },
                                {
                                        type: 'text',
                                        name: 'email',
                                        message: "Enter the empoyee's email."
                                }
                        ])
                        .then(({name, id, email}) => {
                                this.employee = new Employee(name, id, email)
                                console.log(this.employee)
                        })
        }
}
module.exports = app;