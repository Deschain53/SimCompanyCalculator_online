import React from 'react';
import {helperPO} from './helpers/helperPO';

//Importaciones para las tablas:-------------------
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//--------------------------------------------------

const datos = {
    fase : 0,
    nivelEdificio : 1,
    admin : 10,
    bonificacion : 10,
    transporte : 0.35,
    pvm : 3,
    calidad : 0,
};


// const pI = ProductoInfo(fase);
// const productos = pI.map((productoJSON)=>( productoObject(productoJSON,'0','0','0') )); 

const productos = helperPO(datos);

const useStyles = makeStyles({
    table: {
      minWidth: 800,
    },
});

const encabezados = ['Producto ','Costo','Precio en mercado','Unidades hora', 'Ganancia/hora mercado'];

const ProductionCalculator = () => {
    const classes = useStyles();

   // const [categories, setCategories] = useState([0])    
    
    return (
        <>
        <h1>Production calculator</h1>

        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {
                encabezados.map((encabezado)=>(
                    <TableCell key = {encabezado}> {encabezado} </TableCell>
                ))

            }
          </TableRow>
        </TableHead>
        <TableBody>
            {
                productos.map((producto) => (
                    <TableRow key={producto.id}>
                        <TableCell component="th" scope="row">  {producto.nombre}      </TableCell>
                        <TableCell align="right">    {producto.costo}  </TableCell>
                        <TableCell align="right">    {producto.precioMercado}       </TableCell>
                        <TableCell align="right">    {producto.produccionHora}       </TableCell>
                        <TableCell align="right">    {producto.gananciaHoraMercado}       </TableCell>
                        <TableCell align="right">    {}     </TableCell>
                        <TableCell align="right">    {}   </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>

        </>
      );
    
}


export default ProductionCalculator
