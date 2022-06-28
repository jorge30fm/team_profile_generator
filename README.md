# team_profile_generator

![LICENSE BADGE](https://img.shields.io/badge/license-ISC-brightgreen?style=for-the-badge)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#how-to-contribute)
6. [Contact Me](#contact)

## Description
This command line application generates an html file containing a roster of employees. The user is prompted with the option to add a manager. Then, the user can enter information about engineers or interns in the team. Once finished, an html file is created containing cards with the information of each of the employees.


## Installation

To install this application, fork it from the github repository. Clone the starter code and add it to your computer; make sure Node.js is installed before running the application.

## Usage

To deploy the application cd into project directory and in the command line type “node index.js”. Answer the series of questions that will be displayed.

Video Demo: https://watch.screencastify.com/v/rEqo4UjcAVcPHkoFvznm

## License

Distributed under **ISC**. See [License](https://spdx.org/licenses/ISC.html) for more information.



ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Badges

![LICENSE BADGE](https://img.shields.io/badge/license-ISC-brightgreen?style=for-the-badge)

## How to Contribute

To contribute to this application, make sure to fork the repository and clone it to your computer. Email me with any questions or any ideas about possible contributions. Then create a pull request for your code to be reviewed before being merged to the application.

## Tests

Test provided to test functionality ofemployee objects and their methods. To deploy test enter npm test in command line and make sure all 4 test suites and all 13 tests have passed. Test guarantee functionality of manager, intern, engineer, and employee objects and their methods.

## Contact

For any questions, concerns, or ideas for contributions, email me or contact me via gitHub.

**GitHub Profile:** <https://github.com/jorge30fm>

**GitHub Repository:** <https://github.com/jorge30fm/team_profile_generator>

**Email:** jorge30fm@gmail.com


<!-- GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated -->