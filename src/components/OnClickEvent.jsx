import React from 'react'

const OnClickEvent = () => {
    function handleonclick(){
        console.log("button clicked..........")
    }

  return (
    <div><button onClick={handleonclick}>click</button></div>
    // <div><h1 onClick={handleonclick}>click</h1></div>
  )
}

export default OnClickEvent