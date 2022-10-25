
export const getImage = async() => {
    try {
        const apiKey = '8j8vGOFVc1stPezcogfXyRngWHCv7syU';
        const http_call = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await http_call.json();
        const {url} = data.images.original;

        return url;
    } catch (error) {
        console.error(error)
        return 'Image not found';
    }
    
}



