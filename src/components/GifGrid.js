import React from 'react';  //,{useState, useEffect} 
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   
    const {data:images, loading} = useFetchGifs( category );

    console.log(loading);


    return (  //Para regresar una sección con el texto de la categoria
        <>
        <h3 className = "animate__animated animate__fadeIn"> {category}  </h3>

        { loading && <p className = "animate__animated animate__flash "> Loading </p> } 

      <div className = "card-grid">
                { 
                    images.map( img  => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    ))
                }  
        </div> 
        </>
    )
    
}

  
/*GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}*/




    //useEffect( ()=>{   //Para ejecutar la instruccion solo cuando el componente se renderize por primera vez, fue reemplazado por el hook useFetchGifs
    //    getGifs(category)
    //    .then(setImages)//(imgs => setImages( imgs ))
    //},[ category ])

    //getGifs();





                /*images.map( img => (          //Esta es una forma de hacerlo
                    <li key = {img.id}> {img.title} </li>
                    ))*/
                /*images.map( ({id,title}) => (   //Haciendo uso de la desestructuracion
                        <li key = {id}> {title} </li>
                ))   */


            //{loading ? 'Cargando...' : 'Data cargada'}   //OPerador tenario