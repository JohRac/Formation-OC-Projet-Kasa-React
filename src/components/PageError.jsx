import { NavLink } from "react-router-dom";
import { Footer, Header } from "./Banner";
import "../styles/Index.scss"

export function PageError () {
    return <>
        <header className="margin">
            <Header/>
        </header>
        <div id="pageError">
            <p id="error">404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <NavLink to={"/"}>Retourner sur la page d'accueil</NavLink>
        </div>
        <footer>
            <Footer/>
        </footer>
    </>
}