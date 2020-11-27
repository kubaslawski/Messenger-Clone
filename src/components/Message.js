import React from 'react'

export const Message = ({username, message}) => {
    console.log(message)
    console.log(username)
    return (
        <div>
            <p>{username}: {message}</p>
        </div>
    )
}


