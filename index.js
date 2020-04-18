const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");
const axios = require("axios");

function promtUser(){
    const questions = [
        {
            type: "input",
            name: "Username",
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
//  function apiCall({answers}){
//      const queryUrl = `https://api.github.com/users/${answers.username}`;

//     axios.get(queryUrl).then(function(res){
//          console.log(res.data)
//      })
// }

function writeToFile(fileName, data) {
 
}


async function init() {
    console.log("running init")
    try{
        const answers = await promtUser();
        const user = (answers.Username)
        const queryUrl = `https://api.github.com/users/${user}`
        console.log(queryUrl);
        
        axios.get(queryUrl).then(function(res){
            console.log(res.data);
            const html = generateHTML(res.data);
        console.log(html);
        })

        
    }catch(err){
        console.log(err);
    }
}

init();
