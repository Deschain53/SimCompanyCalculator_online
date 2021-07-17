//import PropTypes from 'prop-types';

export const productoObject = (
    id,
    nombre,
    produccionHora,
    producto,
    precioMercado,
    costo,
    gananciaHoraMercado,
    gananciaHoraContrato) => {     

    const productos = {
        nombre: nombre,
        id: producto.id,
        produccionHora: produccionHora,
        costo: costo,
        precioMercado: precioMercado,
        gananciaHoraMercado: gananciaHoraMercado
    }

    return productos;
}
