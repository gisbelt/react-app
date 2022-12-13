import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [ counter, setCounter ] = useState( 1 );

    // useCallback is used to store functions. And that function is only going to be reprocessed when something changes 
    const incrementFather = useCallback(
      () => {
        setCounter( counter + 1 );   
      },
      [],
    )
    

    return (
        <>
            <h1>useCallback Hook: <small>{ counter }</small></h1>
            <hr />

            <ShowIncrement increment={ incrementFather }/>
        </>
    )
}
