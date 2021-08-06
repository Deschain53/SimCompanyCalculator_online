//import React from 'react'

export const useCalcula = (precios, productos) => {

    const findPricesProduct = (idProduct) => {
        const found = precios.find( ({id}) => id === idProduct);
        return found;
    }

    const findPriceProductByIdQuality = (idProduct,quality) => {
        const precios = findPricesProduct(idProduct);
        if(precios !== undefined){
            const {precio} = precios;
            //console.log(precio[quality]);
            return precio[quality];
        }else{
            return 0;
        }
    }

    const getProductsWithNewMarketPrice = (productos) => {
        const newProductos = productos.map( (producto) => {
          const newPrice =  findPriceProductByIdQuality(producto.id,producto.calidad);
          //console.log(newPrecio);
          //changeMarketPrice(id,calidad,newPrecio);
          const productModified = {...producto,precioMercado : newPrice };
          console.log(productModified);
          return productModified;
        });
        
        return newProductos;
      };



    return {
        getProductsWithNewMarketPrice}
}
