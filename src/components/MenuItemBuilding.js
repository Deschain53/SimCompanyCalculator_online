import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export const MenuItemBuilding = (name,id) => {
    return (
        <MenuItem value={id} >{name}</MenuItem>    
    )
};
