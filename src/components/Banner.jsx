import "../styles/Banner.scss"
import HeaderLogo from "../assets/HeaderLogo.png"
import FooterLogo from "../assets/FooterLogo.png"
import { NavLink } from "react-router-dom"


export function Header () {
    return <>
        <div id="Header">
            <img src={HeaderLogo} alt="Kasa"/>
            <nav id="nav">
                <NavLink to="/" className="nav__link">Accueil</NavLink>
                <NavLink to="/about" className="nav__link">A propos</NavLink>
            </nav>
        </div>
    </>
}

export function Footer () {
    return <>
        <div id="Footer">
            <img src={FooterLogo} alt="Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </>
}