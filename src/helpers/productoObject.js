import PropTypes from 'prop-types';

export const productoObject = (producto,costo,precioMercado,gananciaHoraMercado) => {     

    const productos = {
        nombre: producto.name,
        id: producto.db_letter,
        produccionHora: producto.producedAnHour,
        costo: costo,
        precioMercado: precioMercado,
        gananciaHoraMercado: gananciaHoraMercado
    }

    return productos;
}
