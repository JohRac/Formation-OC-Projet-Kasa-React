import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

export function Carousel ({ pictures }) {
    
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
    let btnsHidden = document.querySelectorAll(".btnHidden")

    if (pictures.length === 1) {
        btnsHidden.forEach(btn => {
            btn.style.display = "none"
        });
    }
    
    return (
        <div>
            <img key={"picture" + index} className=""
                src={picture}
                alt=""
            />
            <button className=".btn btnHidden " onClick={handlePreviousClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className=".btn btnHidden " onClick={handleNextClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}