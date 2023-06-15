import { Fragment } from "react";
import Nav from "./Nav.js"
import "../styles/Header.css"

function Header() {

    return (
        <Fragment>
            <header>
                <h1 className="title">🔥 Bienvenue sur ma première application React ! ⚛️</h1>
                <Nav />
            </header>
        </Fragment>
    )
}

export default Header