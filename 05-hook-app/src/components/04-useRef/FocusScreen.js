import React, { useRef } from 'react'
import '../../components/01-useState/counter.css'

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                onClick={handleClick}
                className="form-control"
                placeholder="Su nombre"></input>
            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
