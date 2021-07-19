//Recibe un id de producto,calidad y un arreglo con los precios 
//para devolver el costo para una determinada calidad
// 
import {materiaPrimaObject} from './materiaPrimaObject';


export const getCostoMateriaPrima = ({producedFrom}, calidad, arrayPrecios) => {

    const materiasPrimasInfo  =   producedFrom.map((materiaPrima) => materiaPrimaObject(materiaPrima));

    const costoPorMaterias = materiasPrimasInfo.map( (materiaPrimaObject) =>  
        materiaPrimaObject.cantidad *  
        arrayPrecios.find(product => product.id == materiaPrimaObject.id).precio[calidad]
    );

    let suma = 0;

    costoPorMaterias.forEach(function(numero){
        suma += numero;
    })

    return suma;
}
