import React from 'react'

const Filter = () => {
    const fruits=["apple", "orange", "grapes", "cherry"]
  return (
    <div>
        <ul>
            {
                fruits.map((fruit, index) => fruit.includes("o") ? <li> {fruit}</li> : null

                )
            }
        </ul>

    </div>
  )
}

export default Filter