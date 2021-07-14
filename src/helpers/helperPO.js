import {ProductoInfo} from './getProductosJSON';
import {productoObject} from './productoObject';
import {getPrecio} from './getPrecio';

export const helperPO = ({nivelEdificio,fase,admin,bonificacion,transporte,pvm,calidad}) => {     

    const pI = ProductoInfo(fase);

    const producto = 82;

    const preciosProducto = getPrecio(producto);
    
    console.log(preciosProducto);

    const productos = pI.map((productoJSON)=>( productoObject(productoJSON,'0','0','0') )); 

    return productos;
}



