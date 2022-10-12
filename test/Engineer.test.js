const Engineer = require('../Develop/lib/Engineer')

test('inputting github', () => {
    const testHub = 'test123'
    const e = new Engineer('Jeremy', 340, 'test123@test.com', testHub)
    expect(e.github).toBe(testHub)
})

test('pull github from getGithub()', () => {
    const testHub = 'test123'
    const e = new Engineer('Jeremy', 340, 'test123@test.com', 'test123')
    expect(e.getGithub()).toBe(testHub)
})

test('rollAssign() returning Engineer', () => {
    const testRole = 'Engineer'
    const e = new Engineer('Jeremy', 340, 'test123@test.com', 'test123')
    expect(e.roleAssign()).toBe(testRole)
})