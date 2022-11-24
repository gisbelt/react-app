import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Testing component <AddCategory />', () => { 

    test('should change input value', () => { 
        render( <AddCategory onNewValue={ () => {} } /> )
        //extract input
        const input = screen.getByRole('textbox')
        //trigger event
        fireEvent.input( input, { target: { value: 'DragonBall' } } )
        //assertion of what we are expecting to happen
        expect( input.value ).toBe('DragonBall')
    })
})