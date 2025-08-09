import React from 'react'
import Morning from './Morning'
import Evening from './Evening'

const Time = (props) => {
  return (
    <div>
{ props.time == "am" ? <Morning/> : <Evening/>} 
{/* conditional statement===         
condition ? statement1 : statement2 */}

    </div>
  )
}

export default Time