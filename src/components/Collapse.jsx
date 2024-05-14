import "../styles/Index.scss"
import "../styles/Collapse.scss"
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export function Collapse({ title, content }) {

    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef();

    function handleMoreClick() {
        
        setShowMore(!showMore);
        const element = contentRef.current;
        if (element) {
            if (!showMore) {
                element.style.maxHeight = (element.scrollHeight + 100) + 'px';
                element.style.padding = '20px';
            } else {
                element.style.maxHeight = 0
                setTimeout( () => element.style.padding = 0, 200)
            }
        }
    }

    return (
        <div className="collapse__container">
            <div className="collapse__dropdown">
                <h6 className="collapse__title">{title}</h6>
                <button className="btn" onClick={handleMoreClick}>
                    <FontAwesomeIcon className={showMore ? "favHide" : "favShow"} icon={faChevronUp} />
                </button>
            </div>
            <span ref={contentRef} className="collapse__content">{content}</span>
        </div>
    )
}
