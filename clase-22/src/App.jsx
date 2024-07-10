import React from 'react'
import ColorContainer from './Components/ColorsContainer/ColorContainer'

function App () {
  const cartas_colores= [
        {
            color: ['#77E4C8', '#36C2CE', '#478CCF', '#4535C1'],
            likes: 983645,
            date: '1 hours',
            
        },
        {
            color: ['#FFF8DB', '#FFC7ED', '#7D8ABC', '#304463'],
            likes: 68409804,
            date: '23 hours',
            
            
        },
        {
            color: ['#E7F0DC', '#597445', '#658147', '#729762'],
            likes: 100000,
            date: '8 hours',
            
        },
        {
            color: ['#FFE9D0', '#FFFED3', '#BBE9FF', '#B1AFFF'],
            likes: 504392,
            date: '4 hours',

        }
      ]

  return (

    <ColorContainer cartas_colores={cartas_colores} />
  )
}  
export default App
