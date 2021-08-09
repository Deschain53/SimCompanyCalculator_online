import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {

    const isMounted = useRef(true);     //Sirve para mantener referencia sin volver a renderizar el componente
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {                   
        return () => {
            isMounted.current = false;  //Cuando se desmonte el componente se disparará esta acción 
        }
    }, [])

    useEffect( () => {

        setState({ data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then( data => {
            
            if(isMounted.current){  //Si esta en true significa que el componente aun esta montado, por lo que es seguro hacer esta accion
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }

            });

    }, [url])

    return state;

}


/* Sin el useRef

import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect( () => {

        setState({ data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            });

    }, [url])

    return state;

}


*/
