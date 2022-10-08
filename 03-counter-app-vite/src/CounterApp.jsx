import React from 'react';
import { useState } from 'react'; //Hook
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

    // Destructuring the return of that function.
    // If we want change the 'counter' value (that is 0), we will use 'setCounter' 
    const  [ counter, setCounter ] = useState( 0 )

    const handleAdd = () =>{
        //First value is 0 (counter) and plus 1
        setCounter(counter + 1);
        //Another way
        // setCounter( (c) => c + 1);
    }
    const handleSubtract  = () =>{
        setCounter(counter - 1);
    }
    const handleReset = () =>{
        setCounter(0);
    }

    return (
        <>
        <h1>Counter Here!</h1>
        <h2>{ counter }</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default CounterApp

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

//Docs: https://es.reactjs.org/docs/hooks-intro.html
//Hooks are nothing more than functions that allow you to change the state of a component.