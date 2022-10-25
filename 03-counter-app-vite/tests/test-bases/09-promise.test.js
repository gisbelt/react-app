// Testing with asynchronous tasks 
import  { getHeroeByIdAsync } from "../../src/test-bases/09-promise";

describe('Testing 09-promise', () => { 
    test('getHeroeByIdAsync should return a heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done(); //wait until code finished
            })
    })  

    test('getHeroeByIdAsync should return a error if heroe doesnt exist', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect( error ).toBe(`Cannot find hero with id ${id}`);
                done(); //wait until code finished
            })
    }) 
})