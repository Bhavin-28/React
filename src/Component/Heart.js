import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';


const Heart = (props) => {
    const {liked,likeMethod} = props
  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={likeMethod}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
  )
}

export default Heart