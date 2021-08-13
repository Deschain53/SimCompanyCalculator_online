import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Estilos} from '../Estilos';

//import Button from '@material-ui/core/Button';

export const BuildingDropButton = ({setEdificio}) => {
  const {styleDropDowButtons} = Estilos();
  const classes = styleDropDowButtons();
  const [building, setBuilding] = useState('L');
  const [open, setOpen] = useState(false);

  console.log('renderizado');

  const handleChange = (event) => {
    setBuilding(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    building === ''  ?  setEdificio('L')  :   setEdificio(building)
  }, [building]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel} >Edificio</InputLabel>
        <Select
          className={classes.inputBase}  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={building}
          onChange={handleChange}
        >
          < MenuItem value={'P'} >Plantación</MenuItem>
          < MenuItem value={'o'} >Planta de concreto</MenuItem>
          < MenuItem value={'Q'} >Cantera</MenuItem>
          < MenuItem value={'x'} >Fábrica de construcción</MenuItem>
          < MenuItem value={'g'} >Contratista general</MenuItem>
          < MenuItem value={'T'} >Fábrica de moda</MenuItem>
          < MenuItem value={'M'} >Mina</MenuItem>
          < MenuItem value={'Y'} >Fábrica</MenuItem>
          < MenuItem value={'L'} >Fábrica de electrónicos</MenuItem>
          < MenuItem value={'8'} >Electrónica aeroespacial</MenuItem>
          < MenuItem value={'D'} >Fábrica de propulsión</MenuItem>
          < MenuItem value={'1'} >Fábrica de carros</MenuItem>
          < MenuItem value={'7'} >Fábrica aeroespacial</MenuItem>
          < MenuItem value={'O'} >PLataforma petrolera</MenuItem>
          < MenuItem value={'R'} >Refinería</MenuItem>
          < MenuItem value={'0'} >Hangar</MenuItem>
          < MenuItem value={'9'} >Vertical integration facility</MenuItem>
          < MenuItem value={'F'} >Granja</MenuItem>
          < MenuItem value={'S'} >Depósito de embarque</MenuItem>
          < MenuItem value={'W'} >Reservorio de agua</MenuItem>
          < MenuItem value={'p'} >Centro de investigación agrícola</MenuItem>
          < MenuItem value={'h'} >Laboratorio de física</MenuItem>
          < MenuItem value={'b'} >Laboratorio ganadero</MenuItem>
          < MenuItem value={'c'} >Laboratorio de química</MenuItem>
          < MenuItem value={'a'} >I+D automotriz</MenuItem>
          < MenuItem value={'f'} >Diseño de moda</MenuItem>
          < MenuItem value={'E'} >Central eléctrica</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

/*
          <MenuItem value={'L'} >Fabrica Electronicos</MenuItem>    
          <MenuItem value={'8'} >ElectronicaAeroespacial</MenuItem>
          <MenuItem value={'x'} >Fabrica de construccion</MenuItem>  
*/

/*
          < MenuItem value={'P'} >Plantation</MenuItem>
          < MenuItem value={'o'} >Concrete plant</MenuItem>
          < MenuItem value={'Q'} >Quarry</MenuItem>
          < MenuItem value={'x'} >Construction factory</MenuItem>
          < MenuItem value={'g'} >General contractor</MenuItem>
          < MenuItem value={'T'} >Fashion factory</MenuItem>
          < MenuItem value={'M'} >Mine</MenuItem>
          < MenuItem value={'Y'} >Factory</MenuItem>
          < MenuItem value={'L'} >Electronics factory</MenuItem>
          < MenuItem value={'8'} >Aerospace electronics</MenuItem>
          < MenuItem value={'D'} >Propulsion factory</MenuItem>
          < MenuItem value={'1'} >Car factory</MenuItem>
          < MenuItem value={'7'} >Aerospace factory</MenuItem>
          < MenuItem value={'O'} >Oil rig</MenuItem>
          < MenuItem value={'R'} >Refinery</MenuItem>
          < MenuItem value={'0'} >Hangar</MenuItem>
          < MenuItem value={'9'} >Vertical integration facility</MenuItem>
          < MenuItem value={'F'} >Farm</MenuItem>
          < MenuItem value={'S'} >Shipping depot</MenuItem>
          < MenuItem value={'W'} >Water reservoir</MenuItem>
          < MenuItem value={'p'} >Plant research center</MenuItem>
          < MenuItem value={'h'} >Physics laboratory</MenuItem>
          < MenuItem value={'b'} >Breeding laboratory</MenuItem>
          < MenuItem value={'c'} >Chemistry laboratory</MenuItem>
          < MenuItem value={'a'} >Automotive R and D</MenuItem>
          < MenuItem value={'f'} >Fashion y Design</MenuItem>
          < MenuItem value={'E'} >Power plant</MenuItem>
*/




