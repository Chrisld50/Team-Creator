const inquirer = require('inquirer')  //here we call all of the npm we used, the different classes that were created like manager and the renderHTML.js
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require('fs')
const RenderHTML = require('../Develop/lib/RenderHTML')

const teamMembers = []



init();


function init(){  // This function initializes inquirer and starts the list of questions. 
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Would you like to add a member or generate team?',
            choices: ['Add Member', 'Generate Team']
    
        },
    ])
    .then((data) =>{  
        const {userChoice} = data
       switch (userChoice) {
        case 'Add Member':
            _addMember()
            break;
        case 'Generate Team':
            _generateTeam()
            break;
        default:
            break;
       }
    })
    .catch((error) => {console.log(error)})

    function _generateTeam(){  // this function is the generateTeam function, after all members have been chosen a prompt is given to add a filename, then creates the rendered HTML with fs. 
        if(teamMembers.length < 1){
            console.log('no members in your team')
        }else{
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'filename',
                    message: 'what is your filename?'
                },
            ])
            .then((data) => {
                 const fileName = `./dist/${data.filename}.html`
                 fs.writeFile(fileName, RenderHTML(teamMembers), (err) =>
                 err? console.log(err) : console.log('HTML created!')) 
        })
      }
    }
   
    function _addMember() {  // this function lets us choose which member we would like to add. 
        inquirer.prompt([
          
            {
                type: 'list',
                name: 'members',
                message: 'What member would you like to add to the team?',
                choices: ['Manager', 'Engineer', 'Intern'],
        
            },
        ])
        .then((data) =>{
            const {members} = data
           switch (members) {
            case 'Manager':
                _createManager()
                break;
            case 'Engineer':
                _createEngineer()
                break;
            case 'Intern':
                _createIntern()
                break;
           
            default:
                break;
           }
        })
        .catch((error) => {console.log(error)})   
    }
    
    
    function _createManager(){  // each function for the different employees have been created, with the list of questions then pushing each member into an array. Here the sub classes are also called. 
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message:'What is the manager\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message:'What is the manager\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message:'What is the manager\'s email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?'
            }
        ])
        .then((data) => {
            const {name, id, email, officeNumber} = data
            const manager = new Manager(name, id, email, officeNumber)
            teamMembers.push(manager)
            init()
        })
        .catch((err) => {
            if(err) throw err;
        })
    
    }
    
    function _createEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message:'What is the engineer\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message:'What is the engineer\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message:'What is the engineer\'s email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s Github?'
            }
        ])
        .then((data) => {
            const {name, id, email, github} = data
            const engineer = new Engineer(name, id, email, github)
            teamMembers.push(engineer)
            init()
        })
        .catch((err) => {
            if(err) throw err;
        })
    }
    
    function _createIntern(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of the intern\'s school?'
            }
        ])
        .then((data) => {
            const {name, id, email, school} = data
            const intern = new Intern(name, id, email, school)
            teamMembers.push(intern)
            init()
        })
        .catch((err) => {
            if(err) throw err;
        })
    }
}

