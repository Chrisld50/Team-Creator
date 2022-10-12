const Manager = require('../Develop/lib/Manager')

test('inputting office number', () => {
    const testOffice = 111
    const e = new Manager('Jeremy', 340, 'test123@test.com', testOffice)
    expect(e.officeNumber).toBe(testOffice)
})

test('pull github from getGithub()', () => {
    const testOffice = 111
    const e = new Manager('Jeremy', 340, 'test123@test.com', 111)
    expect(e.getOfficeNumber()).toBe(testOffice)
})

test('rollAssign() returning Manager', () => {
    const testRole = 'Manager'
    const e = new Manager('Jeremy', 340, 'test123@test.com', 111)
    expect(e.roleAssign()).toBe(testRole)
})