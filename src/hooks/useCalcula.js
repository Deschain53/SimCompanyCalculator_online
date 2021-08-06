//import React from 'react'

export const useCalcula = (precios, productos,setProductos) => {

    const findPricesProduct = (idProduct) => {
        const found = precios.find( ({id}) => id === idProduct);
        return found;
    }

    const findPriceProductByIdQuality = (idProduct,quality) => {
        const precios = findPricesProduct(idProduct);
        if(precios !== undefined){
            const {precio} = precios;
            return precio[quality] !== undefined ?  precio[quality] : -1 ;  
        }else{
            return 0;
        }
    }

    const getProductsWithNewMarketPrice = (productos) => {
        const newProductos = productos.map( (producto) => {
          const newPrice =  findPriceProductByIdQuality(producto.id,producto.calidad);
          const productModified = {...producto, precioMercado : newPrice };
          return productModified;
        });

        return newProductos;
      };

    const calcula = async() => {
        const newProducts = await getProductsWithNewMarketPrice(productos);
        setProductos(newProducts);
    };



    return {calcula};
}
