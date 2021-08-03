//Simplemente recibe el id buscado y devuelve arrayObject con el id y los precios
export const obtenPrecioObject = (id_buscado,arrayPrecios) => {

    const preciosObjectArray = arrayPrecios.find( ({id}) => id === id_buscado);
    console.log(preciosObjectArray);

    return preciosObjectArray;
}