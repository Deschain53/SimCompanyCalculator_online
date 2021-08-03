import { useState } from "react";
import PropTypes from 'prop-types';
import{ productObject } from '../functional/processData/productObject';

export const useProducts = () => {

    const inicialState = {
        nombre: '...',
        calidad: 0,
        fase: 0 ,
        id: 0,
        costo: 0,
        precioMercado: 0,
        producccionHora: 0,
        gananciaHoraMercado: 0,
        gananciaHoraContrato: 0,
    };

    const [productos, setProductos] = useState([inicialState]);

    const resetProducts = () => {
        setProductos([inicialState]);
    }

    const addProduct = (productoObject) => {

        if(productos[0] === inicialState && productos.length === 1){
            setProductos([productoObject]);
        }else{
            setProductos( oldArray => [...oldArray, productoObject]);
        }
    }

    const changeProduct = (id,calidad,fase,newProductObject) => {
        const indexProducto = productos.indexOf( 
            productos.find( producto => 
                producto.id === id || 
                producto.calidad === calidad  ||
                producto.fase === fase
            ) 
        );

        if(indexProducto !== -1){
            let auxProductos = [...productos];
            auxProductos[indexProducto] = newProductObject;
            setProductos(auxProductos);
        }

    }
    
    //En el return retornar la función
    return{
        productos,
        resetProducts,
        addProduct
    };
}
