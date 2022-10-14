// Install: yarn add --dev jest 
// Add the following section to your package.json scripts: 
// "test": "jest --watchAll" 
// Run: yarn test

test('this test cant be fail', () => { 
    if(1 === 0){
        throw new Error('cannot be divided by zero')
    }
})

// Watch Usage
// Press f to run only failed tests.
// Press o to only run tests related to changed files.
// Press p to filter by a filename regex pattern.
// Press t to filter by a test name regex pattern.
// Press q to quit watch mode.
// Press Enter to trigger a test run.