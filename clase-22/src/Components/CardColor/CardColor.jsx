import React from 'react' 
import Color from '../Colors/Color'
import "./CardColor.css"

const CardColor = ({colores, date, likes}) => {
    return (
        <div className='color-card'>
            <div className='colors'>
                <Color colores={colores}/>
            </div>
            <div className="card-controls">
                <button className='btn-like'>
                    <i className='bi bi-heart'>{likes}</i>
                    
                </button>
                <span className="update">
                    {date}
                </span>
            </div>
        </div>
    )
}



export default CardColor