import { NavLink } from "react-router-dom"
import housingList from "../assets/logements.json"
import "../styles/HousingList.scss"

export function HousingList () {
    return (
        <div id="housingList">
            { housingList.map((housing,index) =>
                <NavLink to={housing.id} key={"housing"+index}>
                    <img className="housingList__img"
                        src={housing.cover}
                        alt={housing.title}
                    />
                    <span className="housingList__title_background"/>
                    <span className="housingList__title" >{housing.title}</span>
                </NavLink>
            )}
        </div>
    )
}