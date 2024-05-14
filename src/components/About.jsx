import aboutList  from "../assets/AboutList.json"
import AboutImg from "../assets/AboutImg.png"
import { Collapse } from "./Collapse.jsx";
import "../styles/Index.scss"

export function About() {

    return (
        <div className="container">
            <div className="container__overlay2">
                <img className="container__img" src={AboutImg} alt="Un paysage forestier avec des montagnes en arrière plan"/>
                <div className="container__background2"></div>
            </div>
                <ul id="aboutPage">
                { aboutList.map((about,index) =>
                    <li key={"about"+index}>
                        <Collapse title={about.title} content={about.content} />
                    </li>
                )}
                </ul>
        </div>
    )
}