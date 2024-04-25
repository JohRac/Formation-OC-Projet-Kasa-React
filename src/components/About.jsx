import { aboutList } from "./AboutList.jsx"
import AboutImg from "../assets/AboutImg.png"
import { Collapse } from "./Collapse.jsx";
import "../styles/index.scss"

export function About() {

    return (
        <div className="container">
            <div className="container__overlay">
                <img className="container__img" src={AboutImg} alt="Un paysage forestier avec des montagnes en arrière plan"/>
                <div className="container__background"></div>
            </div>
                <ul>
                { aboutList.map((about,index) =>
                    <li key={"about"+index}>
                        <Collapse title={about.title} content={about.content} />
                    </li>
                )}
                </ul>
        </div>
    )
}