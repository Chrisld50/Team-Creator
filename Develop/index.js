
const inquirer = require('inquirer')
const Employee = require('Employee')
const Manager = require('Manager')
const Intern = require('Intern'); 




const teamQuestion = [

    {
        type: 'list',
        name: 'create',
        message: 'Would you like to add a member or generate team?',
        choices: ['Add Member', 'Generate Team']

    },

    {
        type: 'list',
        name: 'rollchoice',
        message: 'What member would you like to add to the team?',
        choices: ['Manager', 'Engineer', 'Intern'],

    },

    {
        type: 'input',
        name: 'page',
        message: 'Please name your team page'
    }
];


const questions = {


Manager: [

{
    type: 'input',
    name: 'name',
    message:'What is your name?'
},
{
    type: 'input',
    name: 'id',
    message:'What is your id?'
},
{
    type: 'input',
    name: 'email',
    message:'What is your email?'
},
{
    type: 'input',
    name: 'OfficeNumber',
    message: 'What is your office number?'
}
],

Engineer: [

{
    type: 'input',
    name: 'name',
    message:'What is your name?'
},
{
    type: 'input',
    name: 'id',
    message:'What is your id?'
},
{
    type: 'input',
    name: 'email',
    message:'What is your email?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your Github?'
}
],

Intern: [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school?'
    }
]


}