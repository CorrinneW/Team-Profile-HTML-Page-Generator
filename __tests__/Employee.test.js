const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () =>{
        it('should return a value for name', () => {
            const name = 'Corrinne Worden';

            const result = new Employee.getName(name);

            expect(result).toEqual(name);
        })
    });
    describe('getId', () => {
        it('should return a value for id'), () => {
            const id = 1;

            const result = new Employee.getId(id);

            expect(result).toEqual(id);
        }
    });
    describe('getEmail', () => {
        it('should return a value for email'), () => {
            const email = 'corrinneworden@gmail.com';

            const result = new Employee.getEmail(email);

            expect(result).toEqual(email);
        }
    });
    describe('getRole', () => {
        it('should return the role Employee'), () => {
            const result = new Employee.getRole('Employee');
            
            expect(result).toEqual('Employee');
        }
    })
})