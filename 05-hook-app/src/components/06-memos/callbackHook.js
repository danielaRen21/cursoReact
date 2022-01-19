import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './showIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback((num) => {
        setCounter(c=>c+num);
    }, [setCounter]);
    
  return <div><h1>useCallback hook: {counter}</h1>
  <hr />
  <ShowIncrement increment={increment}/>
  </div>;
};