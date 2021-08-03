//Recibe un id de producto,calidad y un arreglo con los precios 
//para devolver el costo para una determinada calidad
// 
import { costoMateriasObject } from './costoMateriasObject';
import {materiaPrimaObject} from './materiaPrimaObject';
import {obtenPrecioObject} from './obtenPrecio';


export const getMateriasPrimas = ({producedFrom}, calidad, arrayPrecios) => {
    console.log(producedFrom);
    console.log(calidad);
    console.log(arrayPrecios);

    const materiasPrimasInfo  =   producedFrom.map((materiaPrima) => materiaPrimaObject(materiaPrima));
    console.log(materiasPrimasInfo);
    
    //La siguiente funcion deberá ser movida a un modulo aparte:  IMPORTANTE 
    const costoPorMateriasArrayObject = materiasPrimasInfo.map( ({id,cantidad}) => 
        costoMateriasObject(obtenPrecioObject(id,arrayPrecios),cantidad)
    );

    console.log(costoPorMateriasArrayObject);

    

    let suma = 0;

    costoPorMateriasArrayObject.forEach(function({precio}){
        console.log(precio);
        suma += precio[0];
        console.log(suma);
    })

    console.log(suma);

    return suma;
}
