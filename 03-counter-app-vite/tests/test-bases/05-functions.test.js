import { getUser, getUserActive } from "../../src/test-bases/05-functions";

describe('Test in 05-functions.js', () => { 
    test('getUser should return an object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'Baby_1501'
        };

        const user = getUser();

        //toEqual or toStrictEqual is used to compare objects
        expect( testUser).toEqual( user  )
    })
    
    test('getUserActive should return an object', () => { 
        const names = 'Gisbel'        
        const userActive = getUserActive(names);
        
        // we make sure that ''Gisbel'' is the name expected as a parameter in the function
        expect( userActive ).toEqual( {
            uid: 'ABC567',
            username: names
        });
    })
})