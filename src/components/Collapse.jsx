import "../styles/Index.scss"
import "../styles/Collapse.scss"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export function Collapse({ title, content }) {
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return <>
        <div className="collapse__container">
            <h6 className="collapse__title">{title}</h6>
            <button className="btn" onClick={handleMoreClick}>
                <FontAwesomeIcon className={showMore ?"favHide":"favShow"} icon={faChevronUp}/>
            </button>
        </div> 
        {showMore && <span className="collapse__content">{content}</span>}
    </>
}
