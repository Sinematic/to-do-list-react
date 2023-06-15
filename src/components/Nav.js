import "../styles/Nav.css"

function Nav() {

    return (
        <nav>
            <ul className="nav__ul">
                <li className="nav__li"><a href="https://twitter.com/SineDev">Twitter</a></li>
                <li className="nav__li"><a href="https://www.instagram.com/sinematic.js/">Instagram</a></li>
                <li className="nav__li"><a href="https://github.com/Sinematic">GitHub</a></li>
                <li className="nav__li"><a href="https://sinematic.github.io/">Mon Portfolio</a></li>
            </ul>
        </nav>
    )
}

export default Nav