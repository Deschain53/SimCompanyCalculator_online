import {getPrecios} from './getPrecio';
import {getProductosOrdenados} from './getProductosOrdenados';
//Funcion que tiene como unica tarea ser el link y servir de abstraccion para que se pueda solicitar
//un precio de manera mas facil

export const precioObject = (producto) => {

    const preciosProducto = getPrecios(producto);

    const preciosOrdenados =  getProductosOrdenados(preciosProducto);

    const objectPreciosOrdenados = {
        id: producto,
        precio: preciosOrdenados
    }

    return objectPreciosOrdenados;
}