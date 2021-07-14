import { Edificio } from "../data/EdificiosArreglo"

export const getProduceInfo = (numEdificio) =>{
    //const url = `https://www.simcompanies.com/api/v2/encyclopedia/buildings/${encodeURI(category)}/`;
    //const resp = await fetch(url);
    const {doesProduce} =  JSON.parse(Edificio[numEdificio] )       //await resp.json();
 
    //console.log(Edificio[numEdificio]);    
    console.log(doesProduce);

    //Guardando en un objeto la informacion de interes
    const produceInfo = doesProduce.map( produce =>{
        return{
            id: produce.db_letter,
            name: produce.name,
            //url: produce.image  //s?.downsized_medium.url
        }
    })
 
    return produceInfo;
    }