//Retorna arreglo de JSON de acuerdo a la fase elegida

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {productosNormal,productosRecession, productosBoom}  from "../data/ProductosArreglo"

export const ProductoInfo = (fase) =>{

        if(fase == 0){
            const p = productosRecession.map( (producto) => (
                JSON.parse(producto)
            ));
            return p;
        }else if(fase == 2){
            const p = productosBoom.map( (producto) => (
                JSON.parse(producto)
            ));
            return p;
            //return productosBoom;
        }else{
            const p = productosNormal.map( (producto) => (
                JSON.parse(producto)
            ));
            return p;
            //return productosNormal;
        }  

        

}
