export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9O1lQTPPrrsDfbowNS3VKp2CrO6q1bL8&q=${ category }&limit=20`;
    const resp = await fetch( url ); //http request
    const { data } = await resp.json(); //desestructuring resp.json()

    //call gifs and return an object with the properties we are interested in
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}