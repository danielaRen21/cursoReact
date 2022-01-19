import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];


    return (

        < div >
            <h1>Breaking breakingbadapi</h1>
            <hr />

            {
                loading
                    ?
                    (<div className="alert alert-info text-center">
                        loading
                    </div>)
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote">-{author}</footer>
                        </blockquote>
                    )
            }

            <button
                onClick={increment}
                className="btn btn-primary">Siguiente quote</button>


        </div >
    );
}
