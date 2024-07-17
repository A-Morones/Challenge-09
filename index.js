// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = JSON.stringify(data, null, 2);
    fs.writeFile(fileName, content, 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log(`File ${fileName} has been saved.`);
        }
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
