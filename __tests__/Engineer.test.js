const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getName', () =>{
        it('should return a value for name', () => {
            const name = 'Corrinne Worden';
            const newEngineer = new Engineer(name, 1, 'email@email.com', 'CorrinneW');

            const result = newEngineer.getName();

            expect(result).toEqual(name);
        })
    });
    describe('getId', () => {
        it('should return a value for id', () => {
            const id = 1;

            const newEngineer = new Engineer('Corrinne Worden', id, 'email@email.com', 'CorrinneW');

            const result = newEngineer.getId();

            expect(result).toEqual(id);
        })
    });
    describe('getEmail', () => {
        it('should return a value for email', () => {
            const email = 'corrinneworden@gmail.com';

            const newEngineer = new Engineer('Corrinne Worden', 1, email, 'CorrinneW');

            const result = newEngineer.getEmail();

            expect(result).toEqual(`<a href = "mailto:corrinneworden@gmail.com">corrinneworden@gmail.com</a>`);
        })
    });
    describe('getRole', () => {
        it('should return the role Engineer', () => {

            const newEngineer = new Engineer('Corrinne Worden', 1, 'email@email.com', 'CorrinneW');

            const result = newEngineer.getRole();

            expect(result).toEqual('Engineer');
        });
    })
    describe('getGithub', () => {
        it('should return the Engineer github', () => {
            const github = 'CorrinneW'

            const newEngineer = new Engineer('Corrinne Worden', 1, 'email@email.com', github);

            const result = newEngineer.getGithub();

            expect(result).toEqual(`<a href = 'https://github.com/CorrinneW' target='_blank' rel='noreferrer noopener'>CorrinneW</a>`);
        })
    })
})