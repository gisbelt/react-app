import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState ([])
    const [isLoading, setIsLoading] = useState( true );
    // async function to get images from getGifs() function (promise)
    const getImages = async () => {
        const newImage = await getGifs( category );
        setImages(newImage);
        setIsLoading(false)
    }
    // when the component is loaded for the first time, I want to trigger the http request
    useEffect(() => {
        getImages()
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
    
}
