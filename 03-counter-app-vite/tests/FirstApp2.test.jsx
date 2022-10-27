// Improving FirstApp code to make it easier to read 

import { render, screen } from  "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Testing component <FirstApp />', () => { 

    // we declare the constants outside the test to be able to use them globally
    const title = 'Hello, Im Goku!';
    const subtitle = 123;

    test('should match with snapshot', () => { 
        const { container } = render ( <FirstApp title={ title } /> )
        //Takes a picture
        expect( container ).toMatchSnapshot();        
    })

    test('should show message "Hello, Im Goku!"', () => { 
        render ( <FirstApp title={ title } /> )        
        // Title exists on the screen 
        expect( screen.getByText(title) ).toBeTruthy();
    })

    test('should show title in a h2', () => { 
        render ( <FirstApp title={ title } /> ) 
        // Title must be a h2
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( title );
    })

    test('should show subtitle', () => { 
        render ( <FirstApp subtitle={ subtitle } /> ) 
        expect( screen.getAllByText(subtitle).length ).toBe(1);
    })
})

// screen: helps us to do a lot of automatic cleaning after each test and we dont need to do const { container, getByText, etc } = render.. all the time
// getByRole: que busque por algún rol: alertas, articulos, banner, captions, inputs, tables, etc 