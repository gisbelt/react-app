import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) =>{
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Here we go...")        
    }
    return `${ iterationNumber } iterations done`
}

export const MemoHook = () => {

    const { counter, handleIncrement } = useCounter( 10 );
    const [show, setShow] = useState(true)

    // memorizes the function and will remain that way unless the dependencies (counter) change 
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />
            <h5>{ memorizedValue }</h5>

            <button onClick={ () => handleIncrement() } className="btn btn-primary">+1</button>
            {/* if we press this button, we will see that the "small" counter is not re-rendered.  */}
            <button onClick={ () => setShow(!show) } className="btn btn-secondary">Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
