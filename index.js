const inquirer = require("inquirer");
const fs = require ('fs');
const Markdown = require("./ReadmeGenerator/ReadmeGen");


const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Project description",
      },
      {
        type: "input",
        message: "Please provide a brief description of your project:",
        name: "Usage",
      },
      {
        type: "input",
        message: "Please provide usage instructions for your project:",
        name: "Contribution",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
      },
      {
        type: "list",
        message: "Please choose a license for your project:",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        filter(val){
          return val.toLowerCase();
        }
      },
    ]

async function runQuery(){
    return inquirer.prompt(questions)
      .then((answers) => {
        const mark = Markdown.generateReadme(answers)
        fs.writeFile("README.md", mark, function(err) {
          if(err){
            console.log("Could not save file", err)
          } else {
            console.log('Success: new README.md file generated inside the current folder')
          }
        })
      })
    .catch((error) => {
      console.log(error)
    })
  }

  runQuery()