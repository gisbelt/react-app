// Install: yarn add --dev jest 
// Add the following section to your package.json scripts: 
// "test": "jest --watchAll" 
// Run: yarn test

// describe: it is used to group the tests with a nice title 
describe('Test in <DemoComponent />', () => { 
    test('this test cant be fail', () => { 
        // 1. initialization
        const message1 = 'hello world';
        
        // 2 .stimulus
        const message2 = message1.trim();
    
        // 3. Observe expected behavior (assertions)
        expect( message1 ).toBe( message2 ) // toBe: used to say that it is equal to 
        
    })
})


 
// Watch Usage
// Press f to run only failed tests.
// Press o to only run tests related to changed files.
// Press p to filter by a filename regex pattern.
// Press t to filter by a test name regex pattern.
// Press q to quit watch mode.
// Press Enter to trigger a test run.