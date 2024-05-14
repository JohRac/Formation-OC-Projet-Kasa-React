import "../styles/Banner.scss"
import HeaderLogo from "../assets/HeaderLogo.png"
import FooterLogo from "../assets/FooterLogo.png"
import { NavLink } from "react-router-dom"


export function Header () {
    return (
        <header id="Header">
            <img src={HeaderLogo} alt="Kasa"/>
            <nav id="nav">
                <NavLink exact="true" to="/" activeclassname="active">Accueil</NavLink>
                <NavLink to="/about" activeclassname="active">A Propos</NavLink>
            </nav>
        </header>
    );
}

export function Footer () {
    return <>
        <footer id="Footer">
            <img src={FooterLogo} alt="Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}