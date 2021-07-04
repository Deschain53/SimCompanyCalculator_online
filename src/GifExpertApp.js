import React,{ useState } from 'react'
//import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import {GifGrid} from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack on titan'])    

   // const handleAdd = () =>{
    //    setCategories( cats => [...cats,'HunterXHunter']);    //( ['HunterXHunter', ...categories]);         // ( [...categories, 'HunterXHunter']); 
   // }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = { setCategories }/>
            <hr/>



            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                        key = {category} 
                        category = {category}/>
                    ))
                }
            </ol>    

        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
