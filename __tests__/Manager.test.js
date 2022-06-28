const Manager = require('../lib/Manager.js');


test('Creates a manager object', () => {
        const manager = new Manager('Jorge', "12345", "jorge@email.com", "1234567891");
        expect(manager.role).toBe('manager')
});
test('Checks for an office number', () => {
        const manager = new Manager('Jorge', "12345", "jorge@email.com", "1234567891")
        expect(manager.officeNumber).toEqual(expect.any(String))
});