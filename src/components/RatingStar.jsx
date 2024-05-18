import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Accommodation.scss"

export function RatingStar ({ rating }) {
    

  return <>
    {[...Array(5).keys()].map(i => <FontAwesomeIcon key={i} icon={faStar} color={i < rating ? "gold" : "gray"} className={i < rating ? "gold-star" : "gray-star"}/>)}
  </>
}