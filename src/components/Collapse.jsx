import "../styles/index.scss"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export function Collapse({ title, content }) {
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <div>
            <h6>{title}</h6>
            <button onClick={handleMoreClick}> <FontAwesomeIcon className={showMore ?"favHide":"favShow"} icon={faChevronRight}/></button>
            {showMore && <p>{content}</p>}
        </div>
    )
}
