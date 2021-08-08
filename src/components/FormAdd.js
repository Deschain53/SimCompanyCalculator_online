import React from 'react';
import { useForm } from '../hooks/useForm';
import {getProductJSONoffline} from '../functional/getData/getProductJSONoffline';
import { productObject } from '../functional/processData/productObject';
import PropTypes from 'prop-types';
 
export const FormAdd = ({fase = 1 , calidad = 1, addProduct} ) => {        //Se podria recibir una funcion setState

    const [formValues, handleInputChange] = useForm({
        producto: '',
    });
 
    const {producto} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        const {db_letter,name,producedAnHour} = getProductJSONoffline(producto,fase);     
        const pO = productObject(db_letter,name,fase,calidad,producedAnHour);
        addProduct(pO);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h2> Agregar </h2>
            <hr />

            <div className = "form-group">
                <input
                    type = "text"
                    name = "producto"
                    className = "form-control"
                    placeholder = "Id producto"
                    autoComplete = "off"
                    value = {producto}
                    onChange = {handleInputChange}
                />
            </div>

            <button type = "submit" className = "btn btn-primary" > 
                Agregar
            </button>

        </form>
    )
}

FormAdd.propTypes = {
    addProduct : PropTypes.func.isRequired,
    fase : PropTypes.number.isRequired,
    calidad : PropTypes.number.isRequired
}
