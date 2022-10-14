

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

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



