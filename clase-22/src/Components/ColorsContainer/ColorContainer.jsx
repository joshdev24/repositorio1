import React from 'react'
import './ColorContainer.css'
import CardColor from '../CardColor/CardColor'

const ColorsContainer = ({cartas_colores}) => {
    return (
        <div className='Container'>
            {cartas_colores.map((carta_color) => {
                return (
                <CardColor
                    key={carta_color.id}
                    colores={carta_color.color}
                    likes={carta_color.likes}
                    date={carta_color.date} />
                )
            })}
        </div>
    )
}

export default ColorsContainer
