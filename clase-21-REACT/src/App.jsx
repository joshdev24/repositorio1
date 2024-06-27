import React from 'react'
import {nombre as pepe, persona as person} from './funciones'
import Carta from './Components/Carta'
import Button  from './Components/Boton'

const App = () => {
  console.clear()
  console.log(person)
  let nombreUsuario = 'julieta'
  const obtenerRandom = () => 'dato random'
  return (
      <>
          <div>
              <h1>Hola {nombreUsuario}</h1>
              <Button 
                  texto={'boton 1'}
              />
              <Carta />
          </div>
          <div>
              <h1>Hola {obtenerRandom()}</h1>
              <Button 
                  texto={'agregar a favoritos'}
              />
              <Carta />
          </div>
      </>
  )
}


export default App

