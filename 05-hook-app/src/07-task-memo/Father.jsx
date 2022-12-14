import { Son } from './Son'
import { useMemo, useState } from 'react';
import { useCallback } from 'react';

export const Father = () => {

    const numbers = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    // useCallback is in the category that stores values.
    // is used to memorize functions. And that function will only be reprocessed when something changes. 
    const increase = useCallback(
      (num) => {
        setValue( (oldValue) => oldValue + num )
      },
      [],
    )

    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numbers.map( n => (
                    <Son 
                        key={ n }
                        number={ n }
                        increase={ increase }
                    />
                ))
            }
        </div>
    )
}
