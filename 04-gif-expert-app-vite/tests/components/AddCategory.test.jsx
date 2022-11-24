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
        //TODO: ???

        render( <AddCategory onNewValue={ () => {} } /> );
        const input = screen.getByRole('textbox');
        //form: is reading it from the "aria-label" in the component 
        const form = screen.getByRole("form");
        //trigger event input
        fireEvent.input( input, { target: { value: inputValue } } );
        //trigger event submit
        fireEvent.submit( form );
        //expect input empty
        expect( input.value ).toBe("")
    })
})