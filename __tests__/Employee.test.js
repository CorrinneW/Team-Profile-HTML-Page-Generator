const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () =>{
        it('should return a value for name', () => {
            const name = 'Corrinne Worden';
            const newEmployee = new Employee(name, 1, 'email@email.com', 'Employee');

            const result = newEmployee.getName();

            expect(result).toEqual(name);
        })
    });
    describe('getId', () => {
        it('should return a value for id', () => {
            const id = 1;

            const newEmployee = new Employee('Corrinne Worden', id, 'email@email.com', 'Employee');

            const result = newEmployee.getId();

            expect(result).toEqual(id);
        })
    });
    describe('getEmail', () => {
        it('should return a value for email', () => {
            const email = 'corrinneworden@gmail.com';

            const newEmployee = new Employee('Corrinne Worden', 1, email, 'Employee');

            const result = newEmployee.getEmail();

            expect(result).toEqual(email);
        })
    });
    describe('getRole', () => {
        it('should return the role Employee', () => {

            const newEmployee = new Employee('Corrinne Worden', 1, 'email@email.com', 'Employee');

            const result = newEmployee.getRole();

            expect(result).toEqual('Employee');
        });
    })
})