const inquirer = require("inquirer");
const questions = require("./questions");

//function to get license badge
function getBadge(answers){

  const badge = answers.license;
  let badgeString = '';

  if (badge === 'MIT'){

      badgeString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  
  if (badge === 'Apache'){
      badgeString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };

  if (badge === 'BSD2'){

      badgeString = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  };
      
  if (badge === 'GNU'){

     badgeString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  return badgeString
};

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}


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
  ${getBadge(answers)}
  
  ## Contributing
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}

  ## Questions
  GitHub Username: ${answers.username}

  Email: ${answers.email}


`;
}

module.exports = generateMarkdown;
