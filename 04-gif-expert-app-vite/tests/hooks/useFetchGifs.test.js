import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing hook useFetchGifs', () => { 
    test('should return the initial status', () => { 
        // The renderHook returns several things, e.g., the result 
        const { result } = renderHook( () => useFetchGifs('DragonBall') )    
        // We unstructure of the result.current the images and the "isLoading".  
        const { images, isLoading } = result.current
        // We expect the length of the images to be 0 and the isLoading to be true (the initial state of the hook), 
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy()     
    })

    test('should return an a images array and false isLoading', async () => { 
        // As soon as the component with the hook is mounted, it immediately starts to do the useEffect 
        const { result } = renderHook( () => useFetchGifs('DragonBall') )    
        // We import the function waitFor which is a promise, so we can do an await (remember to use the async in the test function). 
        await waitFor (
            // wait for the condition to be met.
            // We are waiting for the actual result of the images its length to be greater than zero. 
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current
        // We then make the assertions in the same way
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();     
    })
})