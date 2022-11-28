import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// before rendering our component, remember to set the hook path
jest.mock('../../src/hooks/useFetchGifs')

describe('Testing component <GifGrid />', () => { 
    
    const category = 'DragonBall';

    test('should display loading message first', () => { 
        //The images come as an empty array, and the isLoading will be set to true by default.
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Loading...' ));
        expect( screen.getByText( category ));
    })

    test('should display items when images are uploaded through useFetchGifs', () => {  
        //Create the object of the images to suppose that this is what is returning the "useFetchGifs".
        const gifs = [
            {
                id: 'ABC',
                title: 'DragonBall',
                url: 'https://api.giphy.com/v1/gifs/search?api_key=9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8&q=DragonBall&limit=20'
            },
            {
                id: '123',
                title: 'Saitama',
                url: 'https://api.giphy.com/v1/gifs/search?api_key=9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8&q=Saitama&limit=20'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false, // When we already have the images, the "isLoading" will be false.
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})