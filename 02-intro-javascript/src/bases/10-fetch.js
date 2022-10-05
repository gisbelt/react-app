// Fech API: it is already on web browser and it let us do http request
// Create a New App (API) on https://developers.giphy.com/

// Go to Docs on giphy page to generate the call
// then GIPHY API > GIF & Sticker Endpoints > Random Endpoint
// copy the “Gif URL” and add the key at the end
// https://api.giphy.com/v1/gifs/random?api_key=9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8 

const apiKey = '9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8';

const http_call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Chain Promises
//res.json() return a promise that resolve any thing (what is in the api)
//The result of the first promise go to the next .then
http_call
.then(res => res.json())
.then(({data}) => {
    const { url } = data.images.original;
    // console.log(data.images.original.url)
    const img = document.createElement('img');
    img.src = url;
    //put img into html
    document.body.append(img)
})
.catch(console.warn);

