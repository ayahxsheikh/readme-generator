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
  ${answers.license}
  
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
