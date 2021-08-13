import React,{ useState, useEffect } from 'react';
import {FormInfo} from './components/FormInfo';
//import {useForm} from './hooks/useForm';
//Importaciones para las tablas:-------------------
import { makeStyles } from '@material-ui/core/styles';
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
import {useInformation} from './hooks/useInformation'
//import { FormAdd } from './components/FormAdd';
import { QualityDropDownButton } from './components/QualityDropDownButton';
import { FaseDropDownButton } from './components/FaseDropDownButton';
//import {productObject} from './functional/processData/productObject'
import { usePrecios } from './hooks/usePrecios';
import { useCalcula } from './hooks/useCalcula';
import { useBuilding } from './hooks/useBuilding';
import { BuildingDropButton } from './components/BuildingDropButton';

/***Falta agregar:
*Verificar que cambie los datos en cuanto cambia los edificios
*Arreglar el que calcule cuando se cambia el edificio
*Arreglar el que calcule en cuanto se cambia de fase
*Agregar mediante funcion y haciendo uso de modulo react el listado completo de edificios
**Verificar que funcione con todos los precios
*Subir a produccion para que funcione con todos los precios
*/

const {StyledTableCell} = Estilos();

const useStyles = makeStyles({
  table: {
    minWidth: 800
  },
});

export const ProductionC = () => {
  const classes = useStyles();

  const {informacion, updateFromFormInfo, updateQuality, updateFase} = useInformation();

  const {productos, resetProducts, setProductos, isInitialState, setIsInitialState} = useProducts();

  const {precios, extraePreciosPrueba,extraePreciosOnline} = usePrecios();

  const {setEdificio,edificioID} = useBuilding(informacion, setProductos, setIsInitialState);

  const {calcula} = useCalcula(precios, productos, setProductos, informacion);

  console.log('renderizando');

  useEffect(() => {
    if(!isInitialState){
    console.log('Informacion');
    calcula();      
    //console.log(informacion);
    }
  }, [informacion]);

  /*useEffect(() => {    
    if(!isInitialState){
      console.log('productos');
      calcula();      
    }  
  }, [productos])
  */
 
  useEffect(() => {
    //calcula();
    console.log(precios);
  }, [precios])

  const [encabezados, setEncabezados] = useState([
    'Producto ','Calidad','Costo','Precio en mercado',
    'Unidades hora', 'Ganancia/hora mercado','Ganancia/hora contrato']); 

    return (
    <>
      <h1>Production calculator</h1>
      <hr/>

      <FaseDropDownButton key ="FaseDropDownButton"
      updateFase = {updateFase}/>

      <FormInfo 
      key = "formInfo"
      updateFromFormInfo = {updateFromFormInfo}
      informacion = {informacion}
      />

      <QualityDropDownButton key= "DropDownButtonQuality"
      updateQuality = {updateQuality}/>

      <BuildingDropButton key = "BuildingDropButton"
      setEdificio = {setEdificio}
      />

      <hr/>
      <div>
        <button className = "btn btn-primary" onClick = {extraePreciosOnline}> 
        Extrae precios
        </button>

        <button className = "btn btn-primary" onClick = { () => {if(!isInitialState){ calcula() }}  }> 
        Calcula
        </button>

        <button className = "btn btn-primary" onClick = {resetProducts}> 
        Limpiar tabla
        </button>

      </div>

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
              key = {producto.id.toString() + '-' + producto.calidad.toString()}
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

/*
      <FormAdd 
        key = "formAdd"
        fase = {1}
        calidad = {calidad}
        addProduct = {addProduct}              
      />
*/

/*

*/