const Employee = require('./Employee')

class Intern extends Employee{  // this is the subclass intern and adds school to the constructor and creates the role of intern.
    constructor(name, id, email, school){

        super(name, id, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    roleAssign(){
        return 'Intern'
    }
}

module.exports = Intern