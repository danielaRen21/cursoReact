import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';
import { processoPesado } from '../../helpers/processoPesado';

export const MemoHook = () => {

    const { counter, increment } =  useCounter( 5000 );
    const [ show, setShow ] = useState(true);
    const memoProcessStrong = useMemo(() => processoPesado(counter), [counter]);

    return (
        <div>
        <h1>MemoHook</h1>
            <h1>Counter: <small>{ counter } </small></h1>
            <hr />
            <p>{memoProcessStrong}</p>

            <button 
                className="btn btn-primary m-1"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary m-1"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
