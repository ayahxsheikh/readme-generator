const inquirer = require("inquirer");
const questions = require("./questions");

//function to get license badge based on user input; uses an if else statement 
function getBadge(answers){

  const badge = answers.license;
  let finalBadge = '';

  if (badge === 'MIT'){

      finalBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

} else if (badge === 'Apache'){
  
      finalBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

} else if (badge === 'BSD2'){

      finalBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (badge === 'GNU'){

     finalBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

  return finalBadge
};

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  ${getBadge(answers)}

  ## Description
  ${answers.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:

  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License 
  This project is covered under the ${answers.license} license.
  
  ## Contributions
  A list of contributors:
   
  ${answers.contribution}
  
  ## Tests
  Run the following command in the terminal to run tests:
  ${answers.tests}

  ## Questions
  Contact infotmation:

  GitHub Username: [${answers.username}](https://github.com/${answers.username})

  Email: ${answers.email}


  ---

  © ASheikh.

`;
}

module.exports = generateMarkdown;
