import React from 'react'
import Proptypes from "prop-types";

export const GifGridItems = ({title, url}) => {
    console.log(title, url)
    return (
        <div className='card'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div> 
    )
}

GifGridItems.propTypes = {
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
}