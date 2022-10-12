const Intern = require('../Develop/lib/Intern')

test('inputting github', () => {
    const testSchool = 'School123'
    const e = new Intern('Jeremy', 340, 'test123@test.com', testSchool)
    expect(e.school).toBe(testSchool)
})

test('pull school from getSchool()', () => {
    const testSchool = 'School123'
    const e = new Intern('Jeremy', 340, 'test123@test.com', 'School123')
    expect(e.getSchool()).toBe(testSchool)
})

test('rollAssign() returning Intern', () => {
    const testRole = 'Intern'
    const e = new Intern('Jeremy', 340, 'test123@test.com', 'School123')
    expect(e.roleAssign()).toBe(testRole)
})