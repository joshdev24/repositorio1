
// import { nombre as pepe, persona as person } from './funciones'
// import Carta from './Components/Carta'
// import Button from './Components/Boton'
// import RowArticle from './Components/RowArticle'


// const App = () => {
//   console.clear()
//   console.log(person)
//   let nombreUsuario = 'julieta'
//   const obtenerRandom = () => 'dato random'
//   return (
//       <>
//           <div>
//               <h1>Hola {nombreUsuario}</h1>
//               <Button 
//                   texto={'boton 1'}
//               />
//               <Carta />
//           </div>
//           <div>
//               <h1>Hola {obtenerRandom()}</h1>
//               <Button 
//                   texto={'agregar a favoritos'}
//               />
//               <Carta />
//           </div>
//       </>
//   )
// }


// export default App

// const App = () =>{
//     return (
// <div>
// <RowArticle title= {"Lift-off: The MDN Curriculum launch"} fecha={"4 month ago"} author={"developer.mozilla.org"}></RowArticle>
// <RowArticle title= {"Baseline's evolution on MDN"} fecha={"7 month ago"} author={"developer.mozilla.org"}></RowArticle>
// <RowArticle title= {"Introducing the MDN Playground: Bring your code to life!"} fecha={"a year ago"} author={"developer.mozilla.org"} ></RowArticle>
// </div>
//     )
// }

// export default App

import React from 'react'
import ColorCard from './Components/ColorCard/ColorCard'

const App = () => {
    const cards = [
        {
            colors: ['#f6914d', '#ecab7f', '#71b3e0', '#b1c6d5'],
            likes: 233,
            date: '13 hours'
        },
        {
            colors: ['#badabf', '#d8b6d3', '#fa9eec', '#f6b7ec'],
            likes: 1000,
            date: 'Yesterday'
        },
        {
            colors: ['#d5dbbd', '#b09efa', '#c3bddb', '#dad1fa'],
            likes: 79054,
            date: '2 days'
        },
        {
            colors: ['b8827b', '#c8756a', '#6aaf99', '#e5fcc5'],
            likes: 12222,
            date: '3 days'
        }
    ]

    const Colors = props.cards.map((color) => {
        return (<ColorCard 
            firstColor={props.colors[0]} 
            secondColor={cards.colors[1]} 
            thirdColor={cards.colors[2]} 
            fourthColor={cards.colors[3]} 
            likes={cards.likes} 
            date={cards.date}/>)
    })
    return <div>{Colors}</div>
}


export default App