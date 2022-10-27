import { fireEvent, render, screen } from  "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Testing component <CounterApp />', () => { 

    // we declare the constants outside the test to be able to use them globally
    const value = 10; //initial value

    test('should match with snapshot', () => { 
        const { container } = render ( <CounterApp value ={ value } /> )
        expect( container ).toMatchSnapshot();        
    })

    test('should show value 100', () => { 
        render ( <CounterApp value ={ 100 } /> )        
        expect( screen.getByText(100) ).toBeTruthy();
    })

    test('should be incremented with the button +1', () => { 
        // take elements from the dom 
        render ( <CounterApp value ={ value } /> )
        // when clicking on the +1 button, it is incremented to 11 because the initial value is 10
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();
    })

    test('should be deincremented with the button -1', () => { 
        // take elements from the dom 
        render ( <CounterApp value ={ value } /> )
        // when clicking on the -1 button, it is desincremented to 9 because the initial value is 10
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9') ).toBeTruthy();
    })

    test('should work reset', () => { 
        // take elements from the dom 
        render ( <CounterApp value ={ value } /> )
        // when clicking the reset button, the value reset to 10
        // fireEvent.click( screen.getByText('Reset') )
        // expect( screen.getByText('10') ).toBeTruthy();

        // another way
        // name: 'btn-reset' is reading it from the "aria-label" in the component 
        // this is te button I'm doing click
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}))
        expect( screen.getByText('10') ).toBeTruthy();
    })
})

// fireEvent: triggering events 