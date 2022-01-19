import React from 'react'
import './counter.css'
import { useConter } from '../../hooks/useConter'

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useConter(100);

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />

            <button onClick={() => increment(2)} className="btn">+ 2</button>
            <button onClick={() => decrement(2)} className="btn">- 2</button>
            <button onClick={reset} className="btn">Reset</button>
        </>
    )
}
