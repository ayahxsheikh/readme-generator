const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");


// function to initialize program
function init() {
    questions();
};

// function call to initialize program
init();

