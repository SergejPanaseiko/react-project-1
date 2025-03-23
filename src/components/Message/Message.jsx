import React from 'react'

const Message = ({author="Incognito", text, isOnLine=false}) => {
    return (
    <div>
            <h3>{author}</h3>
            <p>{text}</p>
            {isOnLine ? <h2>onLine</h2> : <h2>offLine</h2>}
            { isOnLine && <h4>Work true</h4>}
    </div>
    )
}

export default Message
