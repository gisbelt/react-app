// import PropTypes from 'prop-types';

import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, hight: 0 })

    // useLayoutEffect: La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM 
    // Prefer the standard useEffect when possible to avoid blocking visual updates. 
    useLayoutEffect(() => {
        // get the "width, hight" of element "p". 
        const { width, hight } = pRef.current.getBoundingClientRect()
        setBoxSize({ width, hight })
    }, [quote])

    return (
        <>
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p ref={ pRef } className="mb-1">{ quote }</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">{ author }</cite>
                </figcaption>
            </figure>
            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}

// Quote.propTypes = {
//     quote: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
// }