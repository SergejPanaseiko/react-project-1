import React from 'react'

const Message = (props) => {
    return (
    <div>
            <h3>{props.author}</h3>
            <p>{ props.text }</p>
    </div>
    )
}

export default Message
