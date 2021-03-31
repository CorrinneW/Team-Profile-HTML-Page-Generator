const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('getName', () =>{
        it('should return a value for name', () => {
            const name = 'Corrinne Worden';
            const newIntern = new Intern(name, 1, 'email@email.com', 'Ohio State University');

            const result = newIntern.getName();

            expect(result).toEqual(name);
        })
    });
    describe('getId', () => {
        it('should return a value for id', () => {
            const id = 1;

            const newIntern = new Intern('Corrinne Worden', id, 'email@email.com', 'Ohio State University');

            const result = newIntern.getId();

            expect(result).toEqual(id);
        })
    });
    describe('getEmail', () => {
        it('should return a value for email', () => {
            const email = 'corrinneworden@gmail.com';

            const newIntern = new Intern('Corrinne Worden', 1, email, 'Ohio State University');

            const result = newIntern.getEmail();

            expect(result).toEqual(`<a href = "mailto:corrinneworden@gmail.com">corrinneworden@gmail.com</a>`);
        })
    });
    describe('getRole', () => {
        it('should return the role Intern', () => {

            const newIntern = new Intern('Corrinne Worden', 1, 'email@email.com', 'Ohio State University');

            const result = newIntern.getRole();

            expect(result).toEqual('Intern');
        });
    })
    describe('getSchool', () => {
        it('should return the Intern School', () => {
            const school = 'Ohio State University'

            const newIntern = new Intern('Corrinne Worden', 1, 'email@email.com', school);

            const result = newIntern.getSchool();

            expect(result).toEqual('Ohio State University');
        });
    })
})