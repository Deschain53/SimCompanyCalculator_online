import React, {useState} from 'react';
import {getEdificiosInfo} from '../functional/getData/getEdificiosInfo';
//Este hook manejara el estado con la informacion de los edificios ademas tener metodos para
//extraer caracteristicas dentro de los mismos
//en un principio se usarán datos locales pero despues se puede agregar una accion para 
//extraer los datos desde una API

export const useEdificios = () => {
    const [edificiosInfoObject, setEdificiosInfoObject] = useState(getEdificiosInfo);  //Este estado solo sera verdad si se quiere trabajar offline con los datos de los edificios

    const getSalario = (id_producto) => {       
        const edificio = edificiosInfoObject.find( ({produce}) => produce.includes(id_producto));
        const salario = edificio.salario;   
        return salario !== undefined ? salario : 0;
    };

    const getProduce = (id_edificio) => {
        const {produce} = edificiosInfoObject.find( ({id}) => id === id_edificio );
        return produce;
    };

    return {getSalario, edificiosInfoObject, getProduce};
}
