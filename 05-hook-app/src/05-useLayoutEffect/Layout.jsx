import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

    const { counter, handleIncrement } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`); 
    // If the data has a value, then it takes the data at the zero position of the array.
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading 
                ? <LoadingQuote />  
                : <Quote quote={ quote } author={ author }/>
            }

            <button className="btn btn-primary" onClick={ () => handleIncrement() } disabled={ isLoading }>Next quote</button>
        </>
    )
}
