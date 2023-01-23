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
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License 
  ${answers.license}

  ## Tests
  ${answers.tests}

  ## Questions
  GitHub Username: ${answers.username}
  Email: ${answers.email}


`;
}

module.exports = generateMarkdown;
