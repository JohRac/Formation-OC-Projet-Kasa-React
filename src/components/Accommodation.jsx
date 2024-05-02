import "../styles/Accommodation.scss"
import housingList from "../assets/logements.json"
import { Carousel } from "./Carousel"
import { Collapse } from "./Collapse"
import { RatingStar } from "./RatingStar"

export function Accommodation() {

    const housingId = window.location.pathname.replace('/','')
    const housing = housingList.filter(housing => housing.id === housingId)[0]

    return <>
        <Carousel pictures={housing.pictures} />
        <div className="intro">
            <div className="housing">
                <span className="housing__title">{housing.title}</span>
                <span className="housing__location">{housing.location}</span>
                <ul className="tagsList">
                { housing.tags.map((tags,index) =>
                    <li className="tag" key={"tags"+housingId+index}>
                        <span>{tags}</span>
                    </li>
                )}
                </ul>
            </div>
            <div className="profil" >
                <div className="host" >
                    <span className="host__name">
                    {housing.host.name.split(' ').map((word, index) => (
                        <span key={"hostname"+index} className="word">{word}</span>
                    ))}</span>
                    <img className="host__img"
                        src={housing.host.picture}
                        alt={housing.host.name}
                    />                  
                </div>
                <div className="ratingStar">
                    <RatingStar rating={parseInt(housing.rating)} />
                </div>
            </div>
        </div>
        <div className="collapseTab">
            <Collapse title="Description" content={housing.description} />
            <Collapse title="Equipements" content={housing.equipments.map((equipment,index) =>
                    <li key={"equipments"+housingId+index}>
                        <span>{equipment}</span>
                    </li>
                )} />
        </div>
    </>
}
