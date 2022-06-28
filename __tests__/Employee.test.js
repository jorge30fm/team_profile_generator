const Employee = require('../lib/Employee.js')


test('Creates an Employee object', () => {
        const employee = new Employee("Jorge", "12345", "jorge@email.com")
        expect(employee.name).toEqual(expect.any(String))
        expect(employee.id).toEqual(expect.any(String))
        expect(employee.email).toEqual(expect.any(String))
});
test("Gets employee's name", () => {
        const employee = new Employee('Jorge',)
expect(employee.getName()).toEqual('Jorge')
});
test("Gets employee's ID", () => {
        const employee = new Employee('Jorge', '12345');
        expect(employee.getId()).toEqual('12345')
});
test("Gets employee's email", () => {
        const employee = new Employee("Jorge", "12345", "jorge@email.com");
        expect(employee.getEmail()).toEqual("jorge@email.com");
});
test("Gets Employee's role", () => {
        const employee = new Employee("Jorge", "12345", "jorge@email.com")
        expect(employee.getRole()).toEqual('employee')
})