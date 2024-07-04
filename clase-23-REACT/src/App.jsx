import React from "react"

function App() {
  let condicion2 =true
  let estadoRegistrado = true
  

  const userData = {
    logged: true,
    isAdmin: true,
    lang : "en"
  }



  return (
    <>
      {condicion2
      ? <h2>Se cumplio1</h2>
      : <h3>No se cumplio</h3>
}
    </>
  )
}

export default App
