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