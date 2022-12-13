import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log("Again")
    
    return (
        <button onClick={ () => { increment(); }} className='btn btn-success'>Increment</button>
    )
}
