import React , { useState} from 'react'

const UseStateHook = () => {
    const [count , setCount]= useState(0);

    function handleCount (){
setCount(count+1)
}


  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={handleCount}>click</button>
    </div>
  )
}

export default UseStateHook