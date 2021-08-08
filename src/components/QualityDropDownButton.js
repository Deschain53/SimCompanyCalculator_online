import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Estilos} from '../Estilos';

export const QualityDropDownButton = ({updateQuality}) => {
  //const classes = useStyles();
  const {styleDropDowButtons} = Estilos();
  const classes = styleDropDowButtons();
  const [quality, setQuality] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setQuality(event.target.value);
    //updateQuality(quality);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    quality === ''  ?  updateQuality(0)  :   updateQuality(quality)
  }, [quality]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel} >Calidad</InputLabel>
        <Select
          className={classes.inputBase}  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value={0} >0</MenuItem>    
          <MenuItem value={1} >1</MenuItem>
          <MenuItem value={2} >2</MenuItem>
          <MenuItem value={3} >3</MenuItem>
          <MenuItem value={4} >4</MenuItem>
          <MenuItem value={5} >5</MenuItem>
          <MenuItem value={6} >6</MenuItem>  
          <MenuItem value={7} >7</MenuItem>          
        </Select>
      </FormControl>
    </div>
  );
}