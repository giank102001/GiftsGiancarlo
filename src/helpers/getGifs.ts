export const getGifs = async(categoria:any) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${categoria}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( (img:any) => ({
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title
    }));
    
    return gifs;
}