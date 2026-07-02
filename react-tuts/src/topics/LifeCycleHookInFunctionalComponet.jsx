import React, { useEffect, useState } from 'react'

const LifeCycleHookInFunctionalComponet = () => {

    const [st, setSt] = useState(0);

    useEffect(()=>{
        console.log("component mount");
    },[])

    useEffect(()=>{
        console.log('component update');
    },[st])

    useEffect(()=>{
        return ()=>{
            console.log('component unmount');
        }
    },[])

  return (
    <div>
        LifeCycleHookInFunctionalComponet

        {st}
        <button onClick={()=>setSt(st+1)}>click</button>
    </div>
  )
}

export default LifeCycleHookInFunctionalComponet