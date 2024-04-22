import { useParams } from "react-router-dom"
import "../assets/logements.json"


export function HousingList () {

    const {id} = useParams()





    return <div>
        <h1>Logement {id}</h1>
    </div>
}
