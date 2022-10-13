const Employee = require('./Employee') // employee is imported.

class Manager extends Employee{  // this is the subclass manager and adds officeNumber to the constructor and creates the role of manager.
    constructor(name, id, email, officeNumber){

        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    roleAssign(){
        return 'Manager'
    }
}

module.exports = Manager