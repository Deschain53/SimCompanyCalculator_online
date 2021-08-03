 // eslint-disable-next-line
import {ProductoInfo} from './getProductosJSON';
import {productoObject} from './productoObject';
import {precioObject} from './precioObject';
import {preciosObjectPrueba} from '../data/preciosObjectPrueba';
//import {materiaPrimaObject} from './materiaPrimaObject';
//import {getMateriasPrimas} from './getCostoMateriaPrima';
import {getEdificiosInfo} from './getEdificiosInfo';
import { getSalario } from './getSalario';
import { calculaCosto } from './calculaCosto';
import {verificaPrecios} from './verificaPrecios';

export const helperPO = async({nivelEdificio,fase,admin,bonificacion,transporte,pvm,calidad}) => {     

    const productosInfoJSONs = ProductoInfo(fase);
    const edificiosInfoObject = getEdificiosInfo();

    let preciosObjects = [];   
    //let preciosObjects = preciosObjectPrueba();  //Esto es para la prueba
    let productos = [];

    function encuentra(producto){
        const found = preciosObjects.find(product => product.id === producto);
        
        if( found !== undefined ){
            //console.log('encontrado');
            return found;
        }else{
            preciosObjects.push(precioObject(producto));
            return(preciosObjects.find(producto => producto.id === producto));
        }
    }

    const verifica = (productoJSON) => {
        setTimeout(() => {
            const newPreciosObjects =  verificaPrecios(productoJSON,preciosObjects);
            console.log(newPreciosObjects);
            newPreciosObjects.then( precioObject => {
                precioObject.forEach(precioObject => {
                    if(!preciosObjects.includes(precioObject)){
                        preciosObjects.push(precioObject);
                    }
                });      
            })
        }, 100);      
    }

    const p = (productoJSON) => {
        return new Promise(function(resolve,reject){
            verifica(productoJSON);
            resolve('Promesa resuelta');
        });
    };      
    
    //IMPORTANTE: Falta crear funcion que corrobore que todos los precios se encuentran
    //en preciosObjects

    const producto = 82;
    const Q = calidad;
    
    const productoElegidoJSON = productosInfoJSONs.find(productoJSON => productoJSON.db_letter === producto);
    //console.log(productoElegidoJSON);

    /*const costoMateriaPrima = getCostoMateriaPrima(productoElegidoJSON, (Q>1)? Q-1 : 0, preciosObjects);

    console.log(costoMateriaPrima);*/
    const salario = getSalario(producto,edificiosInfoObject);

    const verify = p(productoElegidoJSON);

    console.log(verify);


    verify.then(()=>{

    console.log(preciosObjects);
    console.log(preciosObjects[0]);
    console.log(preciosObjects[0].precio[0]);

    

    const costoTotal = calculaCosto(nivelEdificio,admin,bonificacion,Q,salario,100,
        productoElegidoJSON,preciosObjects);

    
    
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
    }); 
    
}


