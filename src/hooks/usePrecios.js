import {useState} from 'react';
import {preciosObjectPrueba} from '../data/preciosObjectPrueba';

export const usePrecios = () => {
    const [precios, setPrecios] = useState([{}]);
    const [ispreciosObtenidos, setIspreciosObtenidos] = useState(false);

    const extraePreciosPrueba = () => {
       setPrecios(preciosObjectPrueba());
    };

    return {precios, extraePreciosPrueba};
}
