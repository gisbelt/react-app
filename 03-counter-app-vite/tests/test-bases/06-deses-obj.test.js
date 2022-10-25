import { userContext2 } from "../../src/test-bases/06-deses-obj";

describe('Test in 06-deses-obj.js', () => {     
    test('userContext2 should return an object', () => { 
        const password = '123456'
        const age = '28'        
        const userContext = userContext2({password, age});
        
        expect( userContext ).toEqual( {
            passName: password,
            year: age,
            latlng: {
                lat: 14.1232,
                lng: -21.455
            }
        });
    })
})