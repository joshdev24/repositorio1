import React from "react"


const Button = (props) => {
    console.log(props)
    return (
        <button>{props.texto}</button>
    )
}
export default Button