import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, handleIncrement } = useCounter( 10 );
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={ counter }/></h1>
            <hr />

            <button onClick={ () => handleIncrement() } className="btn btn-primary">+1</button>
            {/* if we press this button, we will see that the "small" component is not re-rendered.  */}
            <button onClick={ () => setShow(!show) } className="btn btn-secondary">Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
