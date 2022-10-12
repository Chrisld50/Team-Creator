const Employee = require('../Develop/lib/Employee')

test('Create new Employee', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object');
})

test('Setting up name', () => {
    const testName = 'Jeremy'
    const e = new Employee(testName)
    expect(e.name).toBe(testName)
})

test('creating ID', () => {
    const testID = 340
    const e = new Employee('Jeremy', testID)
    expect(e.id).toBe(testID)
})

test('inputting email', () => {
    const testEmail = 'test123@test.com'
    const e = new Employee('Jeremy', 340, testEmail)
    expect(e.email).toBe(testEmail)
})

test('pulling name from getName()', () => {
    const testName = 'Jeremy'
    const e = new Employee(testName)
    expect(e.getName()).toBe(testName)
})

test('pulling id from getID()', () => {
    const testID = 340
    const e = new Employee('Jeremy', testID)
    expect(e.getID()).toBe(testID)
})

test('pulling email from getEmail()', () => {
    const testEmail = 'test123@test.com'
    const e = new Employee('Jeremy', 340, testEmail)
    expect(e.getEmail()).toBe(testEmail)
})

test('rollAssign() returning Employee', () => {
    const testRole = 'Employee'
    const e = new Employee('Jeremy', 340, 'test123@test.com')
    expect(e.roleAssign()).toBe(testRole)
})