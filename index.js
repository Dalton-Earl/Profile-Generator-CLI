const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");


function promtUser(){
    const questions = [
        {
            type: "input",
            name: "GitHub Username",
            message: "Enter the github profile you would like a PDF of"
        },
        {
            type: "list",
            name: "color",
            message:"what is your favorite Color?",
            choices: [
                'green',
                'blue',
                'pink',
                'red'
            ]
        }
      ];
    return inquirer.prompt(questions);

}

function writeToFile(fileName, data) {
 
}

async function init() {
    console.log("running init")
    try{
        const answers = await promtUser();

        const html = generateHTML(answers);
    }catch(err){
        console.log(err);
    }
}

init();
