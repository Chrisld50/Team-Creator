const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){ // this is the subclass engineer and adds github to the constructor and creates the role of engineer.

        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    roleAssign(){
        return 'Engineer'
    }
}

module.exports = Engineer