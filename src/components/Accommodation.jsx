import "../styles/Accommodation.scss"
import housingList from "../assets/logements.json"
import { Carousel } from "./Carousel"
import { Collapse } from "./Collapse"
import { RatingStar } from "./RatingStar"

export function Accommodation() {

    const housingId = window.location.pathname.replace('/','')
    const housing = housingList.filter(housing => housing.id === housingId)[0]

    return (
        <div>
            <Carousel pictures={housing.pictures} />
            <div>
                <div>
                    <span>{housing.title}</span>
                    <span>{housing.location}</span>
                    <ul id="">
                    { housing.tags.map((tags,index) =>
                        <li key={"tags"+housingId+index}>
                            <span>{tags}</span>
                        </li>
                    )}
                    </ul>
                </div>
                <div>
                    <img className=""
                        src={housing.host.picture}
                        alt={housing.host.name}
                    />
                    <span>{housing.host.name}</span>
                    <RatingStar rating={parseInt(housing.rating)} />
                </div>
            </div>
            <div>
                <Collapse title="Description" content={housing.description} />
                <Collapse title="Equipements" content={housing.equipments} />
            </div>
        </div>
        
    )
}
