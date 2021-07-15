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

    console.log('Despues de promesa [3]');


    //const preciosProductoOrdenados = preciosProducto.then(getPreciosOrdenados(preciosProducto));
    //const preciosProductoOrdenados = usePrecios(producto);

    //console.log(preciosProductoOrdenados);

    const productos = pI.map((productoJSON)=>( productoObject(productoJSON,'0','0','0') )); 

    return productos;
}



