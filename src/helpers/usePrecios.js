/*import {useState,useEffect} from 'react';
import {getPrecios} from './getPrecio';

export const usePrecios = (producto) => {

    const [preciosOrdenados,setPreciosOrdenados] = useState([]);

    const calidadMaxima = 6;
    let precios = new Array();

    useEffect(()=>{
        getPrecios(producto).then( preciosProducto => {

                for(let i = 0 ; i < calidadMaxima; i++){
                    const aux = preciosProducto.find(producto => producto.calidad == i);
                    if(aux != undefined ){
                        precios[i] = aux.precio;
                    }else{
                        precios[i] = -1;
                    }
                } 
        
                for(let i = preciosProducto.lenght-1; i > 0; i--){
                    if(precios[i] < precios[i-1] && precios[i] > 0){
                        precios[i-1] = precios[i];
                    }else if(precios[i-1] == -1 && precios[i] > 0){
                        precios[i-1] = precios[i];
                    }
                }

                setPreciosOrdenados(
                    {...precios}
                )

            }
        )

    },[producto])

    //const preciosConst = {...precios};

    return preciosOrdenados;
}

*/


                /*if(preciosProducto.calidad = i){
                    precios[i] = preciosProducto.precio;
                    break;
                }else{
                    precios[i] = -1;
                }*/
            //}