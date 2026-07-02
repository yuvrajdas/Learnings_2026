import React, { useState } from 'react'
import CounterView from './CounterView';

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (<>
    <div>Counter Component</div>
    <p>{counter}</p>
    <button onClick={()=>setCounter(counter+1)}>INC</button>
    <CounterView  />
  </>
  )
}

export default Counter;