import React from "react"
import Nav from "./Componets/NavBar"
 import Chat from "./Componets/whatsapp"
import DATA_MOOK from "./data"


let condicion2 = true
let estadoRegistrado = true
const userData = {
  logged: true,
  isAdmin: true,
  lang: "en"
}

function App() {

  return (
    <div>
      <Chat data={DATA_MOOK} />
    </div>
  )
}

export default App
