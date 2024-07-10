import React from "react"
import "./NavBar.css"


const Nav = (props) => {
    let logged = props.logged
    let isAdmin = props.isAdmin
    let lang = props.lang

    return (
        <div className="contenedor">
            <div className="nav">
                <span>LOGO</span>
                <span>INICO</span>
                {
                    !logged && <button className="logeo">INICAR SESION</button>
                }
                {
                    !isAdmin && <button className="crear">CREAR PRODUCTO</button>
                }
            </div>
        </div>
    )
}

export default Nav