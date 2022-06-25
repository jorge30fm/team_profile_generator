const fs = require('fs');
const inquirer = require('inquirer');
class app {
        initializeApp() {
                inquirer.prompt({
                        type: 'confirm',
                        name: 'welcome',
                        message: 'Welcome to Team Profile Generator. Are you ready to start?'
                })

        }
}
module.exports = app;