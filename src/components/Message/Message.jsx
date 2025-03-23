import React from 'react'

const Message = ({author="Incognito", text, isOnLine=false}) => {
    return (
    <div>
            <h3>{author}</h3>
            <p>{text}</p>
            <p>@{ isOnLine }</p>
    </div>
    )
}

export default Message
