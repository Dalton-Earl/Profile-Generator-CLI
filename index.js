const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");
const axios = require("axios");
const pdf = require('html-pdf');
const writeFileAsync = util.promisify(fs.writeFile);
// var options = { format: 'Letter' };
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
        const user = (answers.Username);
        
        const queryUrl = `https://api.github.com/users/${user}`
        console.log(queryUrl);
        axios.get(queryUrl).then( function(res){
            
            profile = res.data;
            console.log(profile);
            
            const html = generateHTML(answers, profile);
             writeFileAsync("index.html", html);
             

             pdf.create(html).toFile('./profile.pdf', function(err, res) {
                if (err) return console.log(err);
                console.log(res); 
              });

            });
            
        }
    
        
    catch(err){
        console.log(err);
    }   
        
}
        
        // const html = generateHTML(answers);
        // await writeFileAsync("index.html", html)

init();
