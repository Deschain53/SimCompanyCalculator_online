import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Estilos} from '../Estilos';
//import {getEdificiosInfo} from '../functional/getData/getEdificiosInfo';

//import Button from '@material-ui/core/Button';

export const BuildingDropButton = ({setEdificio}) => {
  const {styleDropDowButtons} = Estilos();
  const classes = styleDropDowButtons();
  const [building, setBuilding] = useState('L');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setBuilding(event.target.value);
    //updateQuality(quality);
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
          <MenuItem value={'L'} >Fabrica Electronicos</MenuItem>    
          <MenuItem value={'8'} >ElectronicaAeroespacial</MenuItem>
          <MenuItem value={'x'} >Fabrica de construccion</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
}