import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {id,title: nombre} ) => {
    //console.log(id,title,url);

    return (
        <div className = "card">
            
            <p> {nombre}  </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    //url: PropTypes.string.isRequired
}


//<img src = {url}   alt = {title} />