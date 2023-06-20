// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// Questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Name your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];

  // Generates ReadME as the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README file created successfully!')
    );
  }
  
  // Calls app to be initialized
  function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
  }
  
  init();