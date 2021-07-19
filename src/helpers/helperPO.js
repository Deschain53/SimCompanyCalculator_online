 // eslint-disable-next-line
import {ProductoInfo} from './getProductosJSON';
import {productoObject} from './productoObject';
import {precioObject} from './precioObject';
import {preciosObjectPrueba} from '../data/preciosObjectPrueba';
//import {materiaPrimaObject} from './materiaPrimaObject';
import {getCostoMateriaPrima} from './getCostoMateriaPrima';
import {getEdificiosInfo} from './getEdificiosInfo';
import { getSalario } from './getSalario';
import { calculaCosto } from './calculaCosto';

export const helperPO = ({nivelEdificio,fase,admin,bonificacion,transporte,pvm,calidad}) => {     

    const productosInfoJSONs = ProductoInfo(fase);
    const edificiosInfoObject = getEdificiosInfo();

    //let preciosObjects = [];   
    let preciosObjects = preciosObjectPrueba();  //Esto es para la prueba

    function encuentra(producto){
        const found = preciosObjects.find(product => product.id == producto);
        
        if( found !== undefined ){
            //console.log('encontrado');
            return found;
        }else{
            preciosObjects.push(precioObject(producto));
            return(preciosObjects.find(producto => producto.id == producto));
        }
    }
    
    //IMPORTANTE: Falta crear funcion que corrobore que todos los precios se encuentran
    //en preciosObjects

    const producto = 82;
    const Q = calidad;
    
    const productoElegidoJSON = productosInfoJSONs.find(productoJSON => productoJSON.db_letter == producto);
    //console.log(productoElegidoJSON);

    /*const costoMateriaPrima = getCostoMateriaPrima(productoElegidoJSON, (Q>1)? Q-1 : 0, preciosObjects);

    console.log(costoMateriaPrima);*/
    const salario = getSalario(producto,edificiosInfoObject);

    const costoTotal = calculaCosto(nivelEdificio,admin,bonificacion,Q,salario,100,
        productoElegidoJSON,preciosObjects);

 
    let productos = [];
    
    productos.push(
        productoObject(
            productoElegidoJSON.db_letter,          //id
            productoElegidoJSON.name,               //nombre producto
            productoElegidoJSON.producedAnHour,     //produccionHora
            encuentra(producto).precio[Q],          //precio en mercado
            costoTotal, //---------------------
            //getCostoMateriaPrima(productoElegidoJSON, Q, preciosObjects),   //costo
            encuentra(producto).precio[Q] - costoTotal,                                    //Ganancia hora mercado
            encuentra(producto).precio[Q]*((100-pvm)/100) - costoTotal - productoElegidoJSON.transporte*transporte                                  //Ganancia hora contrato
        ) 
    );                                 //ganancia

    /*const productos = productoInfo.map(({db_letter,name,producedAnHour})=>( productoObject(
        db_letter,name,producedAnHour,'0','0','0','0') ));  //precio(82).then(() => precio[0] )*/

    return productos;
}

    //const producto2 = 43;
    // console.log(preciosObjects);

    // const busca82 = encuentra(producto);
    // console.log(preciosObjects);

    // const busca79 = encuentra(producto2);
    // console.log(preciosObjects);

    // //Encontrando un precio
    // console.log(encuentra(producto));
    // console.log(preciosObjects);



    //Extrayendo los precios del mercado de cada producto y guardandolos en un arreglo 
    /*const arregloPreciosMercado = pI.map( ({db_letter}) => (
        {
            id: db_letter,
            precios: getPrecios(db_letter).then(preciosProducto =>{  
                getProductosOrdenados(preciosProducto)
            })    
        }
    ));*/

    /*const prueba = pI[0];

    const arregloPreciosMercado =  (prueba) => {
        return{
            id: pI.db_letter,
            precios: getPrecios(pI.db_letter).then(preciosProducto =>{  
                getProductosOrdenados(preciosProducto)
            })    
        }
    };*/
    
    /*console.log(arregloPreciosMercado.id);
    console.log(arregloPreciosMercado.precios);*/

