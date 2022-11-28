import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing component <GifGrid />', () => { 
    
    const category = 'DragonBall';

    test('should display loading message first', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Loading...' ));
        expect( screen.getByText( category ));
    })

    test('should display items when images are uploaded through useFetchGifs', () => {  
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
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})