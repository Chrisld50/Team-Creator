const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require('fs')
const RenderHTML = require('../Develop/lib/RenderHTML')

const teamMembers = []



init();


function init(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Would you like to add a member or generate team?',
            choices: ['Add Member', 'Generate Team']
    
        },
    ])
    .then((data) =>{
        console.log(data)
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

    function _generateTeam(){
        console.log(teamMembers)
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
            .then(() => {
                const htmlContent = RenderHTML(data)
                fs.writeFile(htmlContent, RenderHTML(teamMembers), (err) =>
                err? console.log(err) : console.log('README created!')) 
        })
      }
    }
   
    function _addMember() {
        inquirer.prompt([
          
            {
                type: 'list',
                name: 'members',
                message: 'What member would you like to add to the team?',
                choices: ['Manager', 'Engineer', 'Intern', 'I am finished'],
        
            },
        ])
        .then((data) =>{
            console.log(data)
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
    
    
    function _createManager(){
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
                name: 'OfficeNumber',
                message: 'What is the manager\'s office number?'
            }
        ])
        .then((data) => {
            console.log(data)
            const {name, id, email, officeNumber} = data
            const manager = new Manager(name, id, email, officeNumber)
            teamMembers.push(manager)
            console.log('team members', teamMembers)
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
            console.log(data)
            const {name, id, email, github} = data
            const engineer = new Engineer(name, id, email, github)
            teamMembers.push(engineer)
            console.log('team members', teamMembers)
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
            console.log(data)
            const {name, id, email, school} = data
            const intern = new Intern(name, id, email, school)
            teamMembers.push(intern)
            console.log('team members', teamMembers)
            init()
        })
        .catch((err) => {
            if(err) throw err;
        })
    }
}

