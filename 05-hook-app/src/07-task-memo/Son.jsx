import React from "react";

export const Son = React.memo(({ number, increase }) => {

    console.log('  I re-generate myself :(. But with the "memo method" I memorized myself');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increase( number ) }
        >
            { number }
        </button>
    )
})