import React, { useState } from 'react'

const TeaMaker = ({cup, guest})=>{
    console.log('teamaker component');
    
    return<>
        <p>We have {guest} and will have to make {cup} of tea.</p>
    </>
}

const PureComponent = () => {
    const [cup, setCup] = useState(0)
    const [guest, setGuest] = useState(0);
    
  return (
      <>
      <button onClick={(e)=> {setCup(5); setGuest(5)}}>set</button>
      <button onClick={(e)=> {setCup(5); setGuest(5)}}>set</button>
      <button onClick={(e)=> {setCup(5); setGuest(5)}}>set</button>
      <button onClick={(e)=> {setCup(5); setGuest(5)}}>set</button>
        <TeaMaker cup={cup} guest={guest} />
    </>
  )
}

export default PureComponent