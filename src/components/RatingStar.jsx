import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function RatingStar ({ rating }) {
    
  const maxRating = 5;

  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    const iconClass = i < rating ? "gold-star" : "gray-star";
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color={i < rating ? "gold" : "gray"} className={iconClass}/>);
  }

  return <>
    {stars}
  </>
}