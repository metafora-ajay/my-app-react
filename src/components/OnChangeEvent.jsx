import React, { useState } from 'react'

const OnChangeEvent = () => {
const [name , setName]= useState("");


  return (
    <div>
        <input type="text" onChange={(e) => setName (e.target.value)}/>
        <h1>{name}</h1>
    </div>
  )
}

export default OnChangeEvent