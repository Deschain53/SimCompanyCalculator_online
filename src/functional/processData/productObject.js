import {getProductoJSONoffline} from '../getData/getProductJSONoffline';

export const productObject = (
    id,
    nombre = '',
    fase = 0,
    calidad = 0,
    produccionHora = 0,
    precioMercado = 0,
    costo = 0,
    gananciaHoraMercado = 0,
    gananciaHoraContrato = 0) => {     

    //const {name,producedAnHour} = getProductoJSONoffline(id,fase);

    const producto = {
        nombre,
        calidad,
        fase,
        id,
        costo: costo,
        precioMercado,
        produccionHora,
        gananciaHoraMercado,
        gananciaHoraContrato
    }

    return producto;
}