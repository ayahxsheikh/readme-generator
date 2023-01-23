const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
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
    message: 'What are the steps required to install your project'
},
{
    name: 'usage',
    message: 'Provide further instructions for usage'
},
{
    name: 'credits',
    messgae: 'list any collaborators'
},
{
    name: 'license',
    message: 'What is your license',
    type: 'list',
    choices: ['MIT',]
},
{
    name: 'tests',
    message: 'Instructions for further testing'
},
{
    name: 'questions',
    message: 'please provide follow-up questions'
}
]).then(answers => {

console.log('Generating README...');
writeToFile(answers);
});

// function to write README file
function writeToFile(answers) {
    fs.writeFile(path.join(__dirname, 'utils' ,'README.md'), generateMarkdown(answers), (err) => {
        if (err) throw err;

    })
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
