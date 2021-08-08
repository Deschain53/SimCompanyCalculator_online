//Commponente que recibe un objeto con la informacion a mostrar y la despliega en pantalla
import React from 'react';
import PropTypes from 'prop-types';
import {Estilos} from '../Estilos';


export const Fila = ({nombre,calidad,id,costo,precioMercado,produccionHora = 0,
    gananciaHoraMercado,gananciaHoraContrato}) => {

    const {StyledTableCell, StyledTableRow} = Estilos();

    const procesaDecimales = (numero) => {
        const numeroDecimales = 3;
        return Number.parseFloat(numero).toFixed(numeroDecimales);
    }

    const key = id.toString() + '-' + calidad.toString();

    return (
        <StyledTableRow  key={key}>
            <StyledTableCell component="th" scope="row">  {nombre}        </StyledTableCell>
            <StyledTableCell align="right">    {calidad}                  </StyledTableCell> 
            <StyledTableCell align="right">    {procesaDecimales(costo)}                    </StyledTableCell>
            <StyledTableCell align="right">    {precioMercado}            </StyledTableCell>
            <StyledTableCell align="right">    {procesaDecimales(produccionHora)}          </StyledTableCell>
            <StyledTableCell align="right">    {procesaDecimales(gananciaHoraMercado)}      </StyledTableCell>
            <StyledTableCell align="right">    {procesaDecimales(gananciaHoraContrato)}      </StyledTableCell>
        </StyledTableRow >
    )
}

Fila.propTypes = {
    nombre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    costo: PropTypes.number.isRequired,
    precioMercado: PropTypes.number.isRequired,
    producccionHora: PropTypes.number,
    gananciaHoraMercado: PropTypes.number.isRequired
}
