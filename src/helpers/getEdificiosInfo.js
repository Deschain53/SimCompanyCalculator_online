import { Edificio } from "../data/EdificiosArreglo"

export const getEdificiosInfo = () =>{
    //const url = `https://www.simcompanies.com/api/v2/encyclopedia/buildings/${encodeURI(category)}/`;
    //const resp = await fetch(url);

    //const {doesProduce} =  JSON.parse(Edificio[numEdificio] )       //await resp.json();

    function getProduceArreglo(produceArreglo){
        const info = produceArreglo.map( (materiaPrima) => (materiaPrima.db_letter));
        return info;
    }
 
    const edificioJSONs =  Edificio.map( (edificio) => JSON.parse(edificio) ); 

    const edificiosInfoObject = edificioJSONs.map( ({db_letter,name, doesProduce,wages}) => (
        {
            id: db_letter,
            nombre: name,
            produce: getProduceArreglo(doesProduce),
            salario: wages
        }
    ));
 
    return edificiosInfoObject; //Regresa un objecto con la informacion de interes
    }