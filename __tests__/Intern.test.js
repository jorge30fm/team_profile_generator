const Intern = require('../lib/Intern.js')

test('Creates an intern object', () => {
        const intern = new Intern('Jorge', "12345", "jorge@email.com", "school");
        expect(intern.role).toBe('intern')
});
test('Checks for a listed school', () => {
        const intern = new Intern('Jorge', "12345", "jorge@email.com", "school")
        expect(intern.school).toEqual(expect.any(String))
});
test("get school", () => {
        const intern = new Intern('Jorge', '12345', 'jorge@email.com', 'school');
        expect(intern.getSchool()).toEqual('school');
})