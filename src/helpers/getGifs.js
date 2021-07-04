
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lLZj80Nq7qEiZbHmVvEXozp5rxsCGSkW&limit=10&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //Guardando en un objeto la informacion de interes
    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs;
    }