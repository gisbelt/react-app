import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing hook useFetchGifs', () => { 
    test('should return the initial status', () => { 
        const { result } = renderHook( () => useFetchGifs('DragonBall') )    
        const { images, isLoading } = result.current

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy()     
    })

    test('should return an a images array and false isLoading', async () => { 
        const { result } = renderHook( () => useFetchGifs('DragonBall') )    
        
        await waitFor (
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();     
    })
})