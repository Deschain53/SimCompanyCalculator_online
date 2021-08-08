import {useState,useEffect} from 'react';
import {useEdificios} from './useEdificios';
import {getProductJSONoffline} from '../functional/getData/getProductJSONoffline';
import { productObject } from '../functional/processData/productObject';

//Este hook se encargará de manejar la informacion a desplegar en la aplicacion 

export const useBuilding = (informacion,setProductos,setIsInitialState) => {
    const [edificioID, setEdificio] = useState('L');
    const {getProduce} = useEdificios();
    const [produce, setProduce] = useState(getProduce(edificioID));
    const {fase,calidad} = informacion;

    const getProductObjetOf = (id) => {
        const {db_letter,name,producedAnHour} = getProductJSONoffline(id,fase);     
        const pO = productObject(db_letter,name,fase,calidad,producedAnHour); 
        return pO;
    };

    const getArrayOfProducObjects = (produce) => {
        const produceObject = produce.map( id => getProductObjetOf(id)) ;
        return produceObject;
    }
    
    useEffect(() => {
        setProduce(getProduce(edificioID));
        //const newProduce = getProduce(edificioID);
        //setProductos(getArrayOfProducObjects(newProduce));
    }, [edificioID]);

    useEffect(() => {
        setProductos(getArrayOfProducObjects(produce));
        setIsInitialState(false);
    }, [produce]);

    return {
        setEdificio,
        edificioID,
        produce
    };
}
