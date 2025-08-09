import React from 'react'

const Notification = ({hasNotification}) => {
  return (
    <div>
        {hasNotification && "You have a new message"}
    </div>
  )
}

export default Notification