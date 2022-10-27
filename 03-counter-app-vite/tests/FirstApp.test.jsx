// Be sure to have installed React Testing Library: yarn add --dev @testing-library/react
// Also Install yarn add -D jest-environment-jsdom
// Add in jest.config.cjs: 
// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
// }
// Also install: yarn add -D @babel/preset-react
// Add in babel.config.cjs: 
// [
//     '@babel/preset-react', 
//     {
//         runtime: 'automatic'
//     }
// ],

import { render } from  "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Testing component <FirstApp />', () => { 
    // we will take a picture of the component and if anything changes the test will fail.
    test('should match with snapshot', () => { 
        const title = 'Hello, Im Goku!';
        const subtitle = 123;
        //Render component in memory        
        const { container } = render ( <FirstApp title={ title } subtitle={ subtitle } /> )
        //Takes a picture
        expect( container ).toMatchSnapshot();
    })

    //match with text title
    test('should show title in a h2', () => { 
        const title = 'Hello, Im Goku!';
        const subtitle = 123;
        const { container, getByText, getByTestId } = render ( <FirstApp title={ title } subtitle={ subtitle } /> )
        
        expect( getByText(title) ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe( title );

        // title must be a h2 and contain a title
        // const h2 = container.querySelector('h2');
        // expect(h2.innerHTML).toContain( title )
    })

    //match with subtitle 
    test('should show subtitle sent by props', () => { 
        const title = 'Hello, Im Goku!';
        const subtitle = 123;
        const { getAllByText } = render ( <FirstApp title={ title } subtitle={ subtitle } /> )
        
        // expects more than one element
        expect( getAllByText(subtitle).length ).toBe(1);
    })
})


// container is an HTML or DOM node
// toMatchSnapshot: takes a picture and creates a folder called _snapshots_ 
// What is the use of that? 
// If tomorrow someone changes a tag of the component, 
// for example an h1 converts it to an h2, the test will fail

// getByText looks for something that matches the text we are sending 
// toBeTruthy: that is 
// toContain: containing a string

// getTestId will help us to take a particular element
// our component have de testid attribute: data-testid="test-title"

// getAllByText return an html elements array, i.e, it expects more than one element