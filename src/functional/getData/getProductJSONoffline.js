import { getProductosJSON } from "./getProductosJSON";

export const getProductJSONoffline = (id,fase) => {
 
    const productosJSON = getProductosJSON(fase);
    const productoJSON = productosJSON.find( ({db_letter}) => db_letter == id );

    return productoJSON;
}