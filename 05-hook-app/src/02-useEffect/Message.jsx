import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        //When component is mounted
        const onMouseMove = ( x, y ) => {
            const coords = { x, y };
            console.log(coords)
        }
        window.addEventListener('mousemove', onMouseMove)    
        return () => {
            //When component is unmounted, Cleanup
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [/*dependencies*/])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}