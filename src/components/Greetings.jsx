import React from 'react'

const Greetings = (props) => {
  return (
    <div><h1>Hello {props.name} . You are {props.age} years old. You are from {props.place}.</h1>
    </div>
  )
}

export default Greetings