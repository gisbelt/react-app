import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter();

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr />
            <button onClick={ () => handleIncrement(2) } className="btn btn-primary">+1</button>
            <button onClick={ handleReset } className="btn btn-secondary">Reset</button>
            <button onClick={ () => handleDecrement(2) } className="btn btn-danger">-1</button>
        </>
    )
}
