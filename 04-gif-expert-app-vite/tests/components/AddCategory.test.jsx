import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Testing component <AddCategory />', () => { 

    test('should change input value', () => { 
        render( <AddCategory onNewValue={ () => {} } /> )
        //extract input
        const input = screen.getByRole('textbox')
        //trigger event input
        fireEvent.input( input, { target: { value: 'DragonBall' } } )
        //assertion of what we are expecting to happen
        expect( input.value ).toBe('DragonBall')
    })

    test('should call onNewValue if input have a value', () => { 
        const inputValue = 'DragonBall'
        const onNewValue = jest.fn(); //function

        render( <AddCategory onNewValue={ onNewValue } /> );
        const input = screen.getByRole('textbox');
        //form: is reading it from the "aria-label" in the component 
        const form = screen.getByRole("form");
        //trigger event input
        fireEvent.input( input, { target: { value: inputValue } } );
        //trigger event submit
        fireEvent.submit( form );
        //expect input empty
        expect( input.value ).toBe("")
        //function is expected to have been called once
        expect( onNewValue ).toHaveBeenCalledTimes(1)
        //function is expected to have been called with value DragonBall
        expect( onNewValue ).toHaveBeenCalledWith( inputValue )
    })

    test('should not call onNewValue if input is empty', () => { 
        const onNewValue = jest.fn(); //function
        render( <AddCategory onNewValue={ onNewValue } /> );
        //form: is reading it from the "aria-label" in the component 
        const form = screen.getByRole("form");
        //trigger event submit
        fireEvent.submit( form );
        //function is expected to haven't been called 
        expect( onNewValue ).toHaveBeenCalledTimes(0)
        expect( onNewValue ).not.toHaveBeenCalled()
    })
})