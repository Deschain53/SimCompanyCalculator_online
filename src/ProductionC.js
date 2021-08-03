import React,{ useState } from 'react';
import {FormInfo} from './components/FormInfo';
//import {useForm} from './hooks/useForm';
//Importaciones para las tablas:-------------------
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Estilos} from './Estilos';
//Importaciones de componentes, hooks y funcionalidades  
import {  Fila  } from './components/Fila';
import { useProducts } from './hooks/useProducts';
import { FormAdd } from './components/FormAdd';

/***Falta probar:
*Modificar un solo valor de un elemento en especifico
*Manejar un useState con el array de los precios
*Hacer el calculo para un producto
*/

const {StyledTableCell, StyledTableRow} = Estilos();

const useStyles = makeStyles({
  table: {
    minWidth: 800
  },
});


export const ProductionC = () => {
  const classes = useStyles();

  const [informacion, setInformacion] = useState({
    fase: 1,
    edificio: 1,
    PVM: 3,
    admin: 0,
    bonificacion: 0,
    transporte: 0,
  });
  //console.log(informacion);

  const actualizaInfo = (newInformation = {}) => {
    setInformacion(newInformation);
  }
  

  const [encabezados, setEncabezados] = useState([
    'Producto ','Calidad','Costo','Precio en mercado',
    'Unidades hora', 'Ganancia/hora mercado','Ganancia/hora contrato']);

  //Para 
  const producto1 = [{
      id: 83,
      calidad: 5,
      fase: 0
  }];
  
  const {productos, resetProducts, addProduct} = useProducts();
  console.log(productos)
    
    return (
    <>
      <h1>Production calculator</h1>

      <FormInfo 
      key = "formInfo"
      actualizaInfo = {actualizaInfo}
      />

      <FormAdd 
        key = "formAdd"
        fase = {1}
        calidad = {1}
        addProduct = {addProduct}              
      />

      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="customized table">
        <TableHead>
          <TableRow >
            {
                encabezados.map((encabezado)=>(
                    <StyledTableCell key = {encabezado}> {encabezado} </StyledTableCell>
                ))

            } 
          </TableRow >
        </TableHead>
        <TableBody>
          {
            productos.map((producto) => (
              <Fila 
              key = {producto.id}
              {...producto} 
              />
            ))  
          }
        </TableBody>
      </Table>
      </TableContainer>

    </>
    );
    
}


export default ProductionC;