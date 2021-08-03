//Custom hook que se encargará de manejar los formularios
import {useState} from 'react';

export const useForm = (inicialState = {}) => {
    const [values, setValues] = useState(inicialState);

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name] : target.value   //El nombre de la propiedad que sea lo que venga en el objeto
        });
    }

    return [ values, handleInputChange];

}
