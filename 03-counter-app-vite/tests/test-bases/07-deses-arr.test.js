import { returnArray } from "../../src/test-bases/07-deses-arr";

describe('Test in 07-deses-arr.js', () => {     
    test('returnArray should return an array', () => { 
        const [letters, numbers] = returnArray();

        // we expect a Text, but we don't know what kind of text 
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        // using javascript comands
        expect ( typeof letters ).toBe('string')
        expect ( typeof numbers ).toBe('number')

        //expect any tipeof string 
        expect ( letters ).toEqual( expect.any(String) );
    })
})