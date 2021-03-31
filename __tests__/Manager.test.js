const Manager= require('../lib/Manager')

describe('Manager', () => {
    describe('getName', () =>{
        it('should return a value for name', () => {
            const name = 'Corrinne Worden';
            const newManager = new Manager(name, 1, 'email@email.com', 3);

            const result = newManager.getName();

            expect(result).toEqual(name);
        })
    });
    describe('getId', () => {
        it('should return a value for id', () => {
            const id = 1;

            const newManager = new Manager('Corrinne Worden', id, 'email@email.com', 3);

            const result = newManager.getId();

            expect(result).toEqual(id);
        })
    });
    describe('getEmail', () => {
        it('should return a value for email', () => {
            const email = 'corrinneworden@gmail.com';

            const newManager = new Manager('Corrinne Worden', 1, email, 3);

            const result = newManager.getEmail();

            expect(result).toEqual(`<a href = "mailto:corrinneworden@gmail.com">corrinneworden@gmail.com</a>`);
        })
    });
    describe('getRole', () => {
        it('should return the role Manager', () => {

            const newManager = new Manager('Corrinne Worden', 1, 'email@email.com', 3);

            const result = newManager.getRole();

            expect(result).toEqual('Manager');
        });
    })
    describe('getOfficeNumber', () => {
        it('should return the Manager Office Number', () => {
            const officeNumber = 3;

            const newManager = new Manager('Corrinne Worden', 1, 'email@email.com', officeNumber);

            const result = newManager.getOfficeNumber();

            expect(result).toEqual(3);
        });
    })
})