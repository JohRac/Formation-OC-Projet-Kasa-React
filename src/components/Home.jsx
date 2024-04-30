import HomeImg from "../assets/HomeImg.png"
import "../styles/Index.scss"


export function Home () {
    return <>
        <div>
            <div className="container">
                <div className="container__overlay">
                    <img className="container__img" src={HomeImg} alt="Un paysage d'une falaise en front de mer"/>
                    <div className="container__background"></div>
                    <p className="container__p">Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <div>Liste logement</div>
        </div>
    </>
}