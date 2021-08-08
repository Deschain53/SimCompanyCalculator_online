import React, {useEffect} from 'react';
import { useForm } from '../hooks/useForm';
//import {DropDownButton} from '../components/DropDownButton';
 
export const FormInfo= ({updateFromFormInfo}) => {        //Se podria recibir una funcion setState

    const [formValues, handleInputChange] = useForm({
        edificio: '',
        PVM: '',
        admin: '',
        bonificacion: '',
        transporte: '',
    });
    
    //const {calidad,fase} = informacion;
    const {edificio,PVM,admin,bonificacion,transporte} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        //updateFromFormInfo(formValues);
    };

    useEffect(() => {
        updateFromFormInfo(formValues);
    }, [formValues])

    return (
        <form onSubmit = {handleSubmit}>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "edificio"
                    className = "form-control"
                    placeholder = "Nivel de edificio"
                    autoComplete = "off"
                    value = {edificio}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "PVM"
                    className = "form-control"
                    placeholder = "Porcentaje de venta bajo mercado"
                    autoComplete = "off"
                    value = {PVM}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "admin"
                    className = "form-control"
                    placeholder = "Gastos administrativos"
                    autoComplete = "off"
                    value = {admin}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "bonificacion"
                    className = "form-control"
                    placeholder = "Bonificación de producción"
                    autoComplete = "off"
                    value = {bonificacion}
                    onChange = {handleInputChange}
                />
            </div>

            <div className = "form-group">
                <input
                    type = "text"
                    name = "transporte"
                    className = "form-control"
                    placeholder = "Costo del transporte"
                    autoComplete = "off"
                    value = {transporte}
                    onChange = {handleInputChange}
                />
            </div>

        </form>
    )
}

/*
            <button type = "submit" className = "btn btn-primary" > 
                Aplicar
            </button>
*/