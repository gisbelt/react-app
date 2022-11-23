import { render, screen } from "@testing-library/react"
import { GifGridItems } from "../../src/components/GifGridItems";

describe('Testing component <GifGridItems />', () => { 
    const title = 'DragonBall'
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8&q=DragonBall&limit=20'

    test('should match with snapshot', () => { 
        const { container } = render( <GifGridItems title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot();
    })

    test('should display img with indicated alt and url ', () => { 
        render( <GifGridItems title={ title } url={ url } /> )
        // screen.debug(); 
        // expect( screen.getByRole('img').src ).toBe( url )
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    })

    test('should display title as a text <p></p> and not as a attribute', () => { 
        render( <GifGridItems title={ title } url={ url } /> )
        expect( screen.getByText(title) ).toBeTruthy();
    })
})