const { default: ListPrompt } = require("inquirer/lib/prompts/list")

class Markdown {

    static renderLicenseBadge(license) {
        const badges = {
            mit :'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            Apache :'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            GPL : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            BSD3 : '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"'
        }
        return badges[license]
    }

    static renderLicenseLink(license){
                const licenseLinks = {
                    mit :'[MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                    Apache :'(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                    GPL : '[GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                    BSD3 : '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"',
                }
                return licenseLinks[license]
            }

    static generateReadme(answers){
        return `
        # ${answers.title}

        ${this.renderLicenseBadge(answers.license)}

        ## Table of Content
        - [Project description](#Description)
        -[Usage](#Usage)
        -[Contribution](#Contribution)
        -[Installation](#Installation)
        -[License](#License)

        ## Description
        ${answers.description}

        ## Usage
        ${answers.usage}

        ## Contribution
        ${answers.contribution}

        ## Installation
        ${answers.installation}

        ## License
        ${this.renderLicenseLink(answers.license)}

        `
    }
}

module.exports = Markdown