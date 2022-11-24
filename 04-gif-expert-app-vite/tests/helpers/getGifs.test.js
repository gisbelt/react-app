import { getGifs } from "../../src/helpers/getGifs"

describe('Testing in getGifs.js ', () => { 
    test('should return an gifs array ', async () => { 
        const gifs = await getGifs('DragonBall');
        // array has more than one property
        expect( gifs.length ).toBeGreaterThan( 0 )
        // we can make an expect of each property to wait for any string
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
})