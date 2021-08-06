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
import { FormAdd } from './components/FormAdd';
import { QualityDropDownButton } from './components/QualityDropDownButton';
import { FaseDropDownButton } from './components/FaseDropDownButton';
//import {productObject} from './functional/processData/productObject'
import { usePrecios } from './hooks/usePrecios';
import { useCalcula } from './hooks/useCalcula';

/***Falta probar:
*Modificar un solo valor de un elemento en especifico
*Manejar un useState con el array de los precios
*Hacer el calculo para un producto
*/

const {StyledTableCell} = Estilos();

const useStyles = makeStyles({
  table: {
    minWidth: 800
  },
});

export const ProductionC = () => {
  const classes = useStyles();

  const {informacion,updateFromFormInfo, updateQuality, updateFase} = useInformation();
  const {calidad,fase} = informacion;

  const {productos, resetProducts, addProduct, setProductos} = useProducts();

  const {precios, extraePreciosPrueba } = usePrecios();

  const { getProductsWithNewMarketPrice} = useCalcula(precios, productos);

  /*useEffect(() => {
    console.log(precios);
  }, [precios]);*/

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  const calcula = () => {
    const newProducts = getProductsWithNewMarketPrice(productos);
    console.log(newProducts);
    setProductos(newProducts);
  };


  const [encabezados, setEncabezados] = useState([
    'Producto ','Calidad','Costo','Precio en mercado',
    'Unidades hora', 'Ganancia/hora mercado','Ganancia/hora contrato']); 

    return (
    <>
      <h1>Production calculator</h1>

      <FaseDropDownButton key ="FaseDropDownButton"
      updateFase = {updateFase}/>

      <FormInfo 
      key = "formInfo"
      updateFromFormInfo = {updateFromFormInfo}
      informacion = {informacion}
      />

      <QualityDropDownButton key= "DropDownButtonQuality"
      updateQuality = {updateQuality}/>

      <FormAdd 
        key = "formAdd"
        fase = {1}
        calidad = {calidad}
        addProduct = {addProduct}              
      />

      <hr/>
      <div>
        <button className = "btn btn-primary" onClick = {calcula}> 
        Calcula
        </button>

        <button className = "btn btn-primary" onClick = {resetProducts}> 
        Limpiar tabla
        </button>
        
        <button className = "btn btn-primary" onClick = {extraePreciosPrueba}> 
        Extrae precios
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
  const modifica = () => {  // Esta funcion se debe adaptar para hacer los calculos
    console.log("click disparado");
    //const newProductObject  = productObject(93,),
    changeProduct(93,5,{    
      id : 93,
      nombre : 'Modificado',
      fase : 1,
      calidad : 8,
      produccionHora : 1998,
      precioMercado : 1234,
      costo : 1111,
      gananciaHoraMercado : 2,
      gananciaHoraContrato : 3
    })
  }
*/

/*
      <ButtonAction key = "buttonAction"  
      leyenda = {"Modifica"}
      acccion = {modifica}/>
*/