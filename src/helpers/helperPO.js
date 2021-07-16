 // eslint-disable-next-line
import {ProductoInfo} from './getProductosJSON';
import {productoObject} from './productoObject';
import {getPrecios} from './getPrecio';
//import {usePrecios} from './usePrecios';
import {getProductosOrdenados} from './getProductosOrdenados';

export const helperPO = ({nivelEdificio,fase,admin,bonificacion,transporte,pvm,calidad}) => {     

    const pI = ProductoInfo(fase);

    const producto = 82;

    const preciosProducto = getPrecios(producto);
    
    console.log(preciosProducto);
    const preciosOrdenados = preciosProducto.then( preciosProducto =>{
        //console.log(preciosProducto)     
        getProductosOrdenados(preciosProducto)
    }
    );
    console.log(preciosOrdenados);

    //Extrayendo los precios del mercado de cada producto y guardandolos en un arreglo 
    const arregloPreciosMercado = pI.map( ({db_letter}) => (
        {
            id: db_letter,
            precios: getPrecios(db_letter).then(preciosProducto =>{  
                getProductosOrdenados(preciosProducto)
            })    
        }
    ));

    console.log(arregloPreciosMercado);

    const productos = pI.map((productoJSON)=>( productoObject(productoJSON,'0','0','0') )); 

    return productos;
}



