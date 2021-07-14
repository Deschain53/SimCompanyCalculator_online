//Intentar poner use al iniciar un hook
import {useState,useEffect} from 'react';
import { getProduceInfo } from '../helpers/getProduceEdificio';

export const useFetchGifs= ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getProduceInfo( category )
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });


    },[category])

    return state;    //{ data: [], loading: true}
}
