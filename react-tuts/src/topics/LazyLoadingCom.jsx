import React, { act, useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'INC' :
            return { count: state.count + 1 }
        case 'DEC' :
            return { count : state.count - 1}
        default :
            return state    
    }
}

const initValue = {count:0}

const LazyLoadingCom = () => {

    const [state, dispatch] = useReducer(reducer, initValue)

    return(
        <>
             <DisplayCount />
            <button onClick={()=>dispatch({type:'INC'})}>INC</button>
            <button onClick={()=>dispatch({type:'DEC'})}>DEC</button>
        </>


    )
}

export default LazyLoadingCom