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
    choices: ['MT',]
}
]).then(answers => {

//    [
//     answers.username, answers.title, answers.description, answers.usage, answers.credits, answers.license
// ];

console.log(answers);
})

// function to write README file
//append each answer from user input under relevant title in the readme file 
function writeToFile(fileName, ansers) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
