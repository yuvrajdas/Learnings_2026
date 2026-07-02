import React, { useReducer, useRef } from 'react'

const CounterView = React.memo(({c}) => {
    const ref = useRef(0)
  return (
    <div>CounterView {ref.current++} {c}</div>
  )
})

export default CounterView