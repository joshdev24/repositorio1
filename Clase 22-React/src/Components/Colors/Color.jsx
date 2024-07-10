import React from 'react';
import "./Color.css"

const Color = ({colores}) => {
    return (
    <div className="colors">
                {colores.map((color /* string */, index /* number */) => {
                    return (
                        <div className="color" style={{backgroundColor: color}} key={color + index} >
                        </div>
                    )
                })
                }
    </div>
    )
}

export default Color