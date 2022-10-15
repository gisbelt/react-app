//First install de babel configuration:
//yarn add --dev babel-jest @babel/core @babel/preset-env

//Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:
//See Docs: https://jestjs.io/docs/getting-started
//if it not working rename babel.config.js to babel.config.cjs

const { getHello } = require("../../src/test-bases/02-template-string");

describe('Test in 02-template-string', () => { 
    test('getHello should return "Hello Gisbel"', () => { 
        const names = 'Gisbel';
        const message = getHello( names );

        expect( message ).toBe(`Hello ${ names }`);
    })    
})

//If someone change your original code, the test suite let you know
//Jest test run your original code