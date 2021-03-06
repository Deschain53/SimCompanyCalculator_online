import React, {useState, useEffect} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Estilos} from '../Estilos';

//import Button from '@material-ui/core/Button';

export const FaseDropDownButton = ({updateFase}) => {
  const {styleDropDowButtons} = Estilos();
  const classes = styleDropDowButtons();
  const [fase, setFase] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFase(event.target.value);
    //updateQuality(quality);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    fase === ''  ?  updateFase(0)  :   updateFase(fase)
  }, [fase]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel} >Fase</InputLabel>
        <Select
          className={classes.inputBase}  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fase}
          onChange={handleChange}
        >
          <MenuItem value={0} >Recesión</MenuItem>    
          <MenuItem value={1} >Normal</MenuItem>
          <MenuItem value={2} >Boom</MenuItem>  
        </Select>
      </FormControl>
    </div>
  );
}