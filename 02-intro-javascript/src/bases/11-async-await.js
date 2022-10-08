// Async - Await
// The "await" goes hand in hand with the async, while the "async" can be independent

// Async 
// the async is used to return a promise by default
const getURL = async() => {
    return 'https://sdad.com';
}
getURL().then(console.log)


// Await
// the await helps us to work all the code as if it were synchronous
// wait for the promise to finish to execute the following code
const getImage = async() => {
    try {
        const apiKey = '9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8';
        const http_call = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await http_call.json();
        const {url} = data.images.original;
        // console.log(url)
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        console.error(error)
    }
    
}
getImage()

