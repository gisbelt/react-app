import heroes from "../../src/data/heroes";
import { getHeroeById, getHeroeByOwner } from "../../src/test-bases/08-imp-exp";

describe('Testing 08-imp-exp', () => { 
    test('getHeroeById should return a heroe by ID', () => { 
        const id = 1;
        const hero = getHeroeById( id )
        console.log(hero)
        
        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
    })

    test('getHeroeById should return a undefined if ID doesnt exits', () => { 
        const id = 100;
        const hero = getHeroeById( id )
        console.log(hero)
        
        //toBeFalsy = null or undefined
        expect( hero ).toBeFalsy()
    })

    test('getHeroeByOwner should return a array with DC heroes', () => { 
        const owner = 'DC';
        const heroes = getHeroeByOwner( owner )
        console.log(heroes)
        
        expect( 3 ).toEqual( heroes.length )
        expect( heroes ).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )
        
        //the right way
        //test that the filtered function does exactly what we expect it to do
        expect( heroes ).toEqual( heroes.filter ( (heroe) => heroe.owner === owner))
    })

    test('getHeroeByOwner should return a array with Marvel heroes', () => { 
        const owner = 'Marvel';
        const heroes = getHeroeByOwner( owner )
        console.log(heroes)
        
        expect( 2 ).toEqual( heroes.length )
        
        //the right way
        //test that the filtered function does exactly what we expect it to do
        expect( heroes ).toEqual( heroes.filter ( (heroe) => heroe.owner === owner))
    })
})