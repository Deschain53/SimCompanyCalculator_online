 // eslint-disable-next-line
import {ProductoInfo} from './getProductosJSON';
import {productoObject} from './productoObject';

export const helperPO = ({nivelEdificio,fase,admin,bonificacion,transporte,pvm,calidad}) => {     

    const pI = ProductoInfo(fase);
    let preciosObjects = [];

    function encuentra(producto){
        const found = preciosObjects.find(product => product.id == producto);
        
        if( found !== undefined ){
            console.log('encontrado');
            return found;
        }else{
            preciosObjects.push(precioObject(producto));
            return(preciosObjects.find(producto => producto.id == producto));
        }
    }

    const producto = 82;
    const producto2 = 79;

    //const precioPrueba = precioObject(producto);
    //console.log(precioPrueba);

    //preciosObjects.push(precioPrueba);

    console.log(preciosObjects);

    const busca82 = encuentra(producto);
    console.log(preciosObjects);

    const busca79 = encuentra(producto2);
    console.log(preciosObjects);

    //Encontrando un precio
    console.log(encuentra(producto));
    console.log(preciosObjects);





    //Si no se encuentra precio se buscará
    //Para extraer el precio de costo de un producto


    const productos = pI.map(({db_letter,name,producedAnHour})=>( productoObject(
        db_letter,name,producedAnHour,'0','0','0','0') ));  //precio(82).then(() => precio[0] )

    return productos;
}


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

