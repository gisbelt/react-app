//First: create jest.config.cjs and jest.setup.js
//jest.setup.js: to install some kind of code that allows node to execute the fetch api
//run yarn add -D whatwg-fetch

import { getImage } from "../../src/test-bases/11-async-await";

describe('Testing 11-async-await', () => { 
    test('getImage should return a error if image is not found', async() => { 
        const resp = await getImage();
        console.log(resp)
        expect( typeof resp ).toBe('string')
    })
})