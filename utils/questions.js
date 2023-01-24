const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown"); 


// function to prompt  questions for user
function questions () {
    inquirer.prompt([
    {
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    },
    {
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        message: 'Please provide a short description of your project'
    },
    {
        name: 'installation',
        message: 'What command should be run to install dependencies? '
    },
    {
        name: 'usage',
        message: 'Provide further instructions for usage'
    },
    {
        type: 'input',
        name: 'contribution',
        messgae: 'What does the user need to know about contributing to the project?'
    },
    {
        name: 'license',
        message: 'What license does your project require?',
        type: 'list',
        choices: ['MIT', 'Apache', 'BSD2', 'GNU']
    },
    {
        name: 'tests',
        message: 'What command should be run to test the project?'
    },
    {
        name: 'questions',
        message: 'Please provide any follow-up questions'
    }
    ]).then(answers => {
        writeToFile(answers);

        // function to write README file
        function writeToFile(answers) {
            fs.writeFile(path.join(__dirname,'..', 'README.md'), generateMarkdown(answers), (err) => {
                if (err) throw err;
            });
    };
        console.log('Generating README...');
    });
};
    
   
    

    module.exports = questions;