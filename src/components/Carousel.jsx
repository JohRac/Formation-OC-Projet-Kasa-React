import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import "../styles/Carousel.scss"

export function Carousel({ pictures }) {

    const [index, setIndex] = useState(0);

    function handleNextClick() {
        if (index === pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }

    function handlePreviousClick() {
        if (index === 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    let picture = pictures[index]

    return <div className="carousel">
        <img key={"picture" + index} className="carousel__img"
            src={picture}
            alt=""
        />

        {pictures.length > 1 &&
            <>
                <button className="btn carousel__btn left" onClick={handlePreviousClick}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="carousel__index">{index + 1}/{pictures.length}</span>
                <button className="btn carousel__btn right" onClick={handleNextClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </>}
    </div>
}
