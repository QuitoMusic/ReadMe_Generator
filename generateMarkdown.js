// User prompt answer creates a badge according to license selected
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
}

// License link is generated to work with the badge
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `- [License](#license)`;
}

// License section renders with text advise
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  return `## License

This project is licensed under the ${license} License - see the [LICENSE](LICENSE) file for details.`;
}


// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;