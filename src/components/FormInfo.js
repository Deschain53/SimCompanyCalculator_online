import React from 'react';
import { useForm } from '../hooks/useForm';
 
export const FormInfo= ({actualizaInfo}) => {        //Se podria recibir una funcion setState

    const [formValues, handleInputChange] = useForm({
        edificio: '',
        PVM: '',
        admin: '',
        bonificacion: '',
        transporte: '',
    });
 
    const {edificio,PVM,admin,bonificacion,transporte} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        actualizaInfo(formValues);
    }


    return (
        <form onSubmit = {handleSubmit}>
            <h2> Datos </h2>
            <hr />

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

            <button type = "submit" className = "btn btn-primary" > 
                Guardar
            </button>

        </form>
    )
}
