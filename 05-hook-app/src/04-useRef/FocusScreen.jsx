import { useRef } from "react"

export const FocusScreen = () => {

    //useRef: It serves to manage a value of some variable that we can change and work with but does not trigger re-renderings when a change is made.
    const inputRef = useRef();
    
    const onFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text" 
                name="" 
                placeholder="Name..." 
                className="form-control"                
            />

            <button onClick={ onFocus } className="btn btn-success mt-2">
                Set Focus
            </button>
        </>
    )
}
