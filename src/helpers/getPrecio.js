//Hace la conexión con la API del mercado para los precios de un producto en especifico

export const getPrecios = async(id) =>{
    //const header= `https://ronchon-vin-08117.herokuapp.com/`;
    const header='';
    const url = header +`https://www.simcompanies.com/api/v2/market/${encodeURI(id)}`;
    const resp = await fetch(url);
    const informacion = await resp.json();

    //Guardando en un objeto la informacion de interes
    const precios = informacion.map( info =>{
        return{
            calidad: info.quality,
            precio: info.price,
            cantidad: info.quantity

        }
    })

    return precios;
    }







