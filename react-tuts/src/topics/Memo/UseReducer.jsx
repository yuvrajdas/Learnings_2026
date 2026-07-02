import React, { useReducer } from 'react'

const reducer = (state, action)=>{
    if(action.type === 'inc'){
        return {count:state.count+1}
    }

    if(action.type === 'dec'){
        return {count:state.count - 1}
    }
}

const initailValue = {count:0}
const UseReducer = () => {
 
    const [state, dispatch] = useReducer(reducer, initailValue);
  return (
    <div>
        {state.count}
        <button onClick={()=>dispatch({type:'inc'})}>Inc</button>
        <button onClick={()=>dispatch({type:'dec'})}>Dec</button>
    </div>
  )
}

export default UseReducer