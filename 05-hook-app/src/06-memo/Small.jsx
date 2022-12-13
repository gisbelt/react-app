import React from 'react'

//we memorize the component so that it is not rendered again
export const Small = React.memo(({ value }) => {

    console.log('I rendered again :(')

    return (
        <small>{ value }</small>
    )
})