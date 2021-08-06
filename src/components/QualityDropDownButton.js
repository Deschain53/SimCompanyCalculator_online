import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    backgroundColor: '#18191f',
    color: theme.palette.common.white
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#18191f',
    color: theme.palette.common.white
  },
  inputLabel: {
    color: theme.palette.common.white
  },
  inputBase: {
    color: theme.palette.common.white
  }
  
}));

export const QualityDropDownButton = ({updateQuality}) => {
  const classes = useStyles();
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


/*      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
*/
























/*import React from 'react';

export const DropDownButton = () => {
    return (
        <div className="dropdown mt-3">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
            Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
          <li><a className="dropdown-item" href="#!">Action</a></li>
          <li><a className="dropdown-item" href="#!">Another action</a></li>
          <li><a className="dropdown-item" href="#!">Something else here</a></li>
        </ul>
        </div>    
    )
}*/
