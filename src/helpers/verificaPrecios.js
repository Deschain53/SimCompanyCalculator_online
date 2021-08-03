//Recibe una array, verifica que exista los precios y de no ser asi los solicita,
//regresa el array con los precios ya adquiridos
import {precioObject} from './precioObject';

export const verificaPrecios = async({db_letter,producedFrom},preciosObjects) => {

    const verifica = (producto) => {
        const found = preciosObjects.find(product => product.id === producto);
        
        if( found === undefined ){
            const precioObjectPedido = precioObject(producto);
            preciosObjects.push(precioObjectPedido);
            //return precioObjectPedido; //(preciosObjects.find(producto => producto.id === producto));
        }
    }

    const idMateriasPrimas = producedFrom.map( ({resource}) => resource.db_letter );

    console.log(idMateriasPrimas);

    idMateriasPrimas.forEach(idMateriaPrima => {verifica(idMateriaPrima)});
    console.log(preciosObjects);

    verifica(db_letter);

    console.log(preciosObjects);

    return(preciosObjects);

}






