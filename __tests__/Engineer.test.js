const Engineer = require('../lib/Engineer.js')

test('Creates an engineer object', () => {
        const engineer = new Engineer('Jorge', "12345", "jorge@email.com", "engineer", "gitHub");
        expect(engineer.role).toBe('engineer')
});
test('Checks for a gitHub username', () => {
        const engineer = new Engineer('Jorge', "12345", "jorge@email.com", "engineer", "gitHub")
        expect(engineer.gitHub).toEqual(expect.any(String))
});
test("get github username", () => {
        const engineer = new Engineer('Jorge', '12345', 'jorge@email.com', 'engineer', 'gitHub');
        expect(engineer.getGitHub()).toEqual('gitHub');
})