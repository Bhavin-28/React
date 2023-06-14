import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Registration from './Registration';
import Login from './Login';
import './Home.css';
import BackgroundImage1 from '../Images/slider1.jpg';
import BackgroundImage2 from '../Images/slider2.jpg';
import BackgroundImage4 from '../Images/slider4.jpg';
import Heart from './Heart';

const Home = () => {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [count, setCount] = useState(0)

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] += 1;
      return updatedLikes;
    });
  };

  const handleLiked = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

  const handleDisLike = (index) =>{
    setLikes(function(prevLikes){
      return [...prevLikes,1]
    })
  }

  function(prevLikes){
    const updatedLikes = [...pre]
  } 

  (prevLikes) => {
    const updatedLikes = [...pre]
  }
  function setLikes(fu){
    like
    const value = fu(like)
    like = value
  }

  return (
    <div className="container">
      <div className="header"></div>
      <div className="background-image-container">
        <div className="image1">
          <img src={BackgroundImage1} alt="Home page background image" className="background-image" />
          <div className='like-main'>
            <Heart liked={likes[0]} likeMethod={() => handleLiked(0)} />
            <div className="like-container">
              <button onClick={() => handleLike(0)} className="like-button">
                <FontAwesomeIcon icon={faThumbsUp} /> 
              </button>
              <button onClick={() => handleDisLike(0)} className="like-button">
                <FontAwesomeIcon icon={faThumbsDown} /> 
              </button>
              <span className="like-count">{likes[0]}</span>
            </div>
          </div>
        </div>
        <div className="image2">
          <img src={BackgroundImage2} alt="Home page background image" className="background-image" />
          <div className='like-main'>
            <Heart liked={likes[1]} likeMethod={() => handleLiked(1)} />
            <div className="like-container">
              <button onClick={() => handleLike(1)} className="like-button">
                <FontAwesomeIcon icon={faThumbsUp} /> 
              </button>
              <button onClick={() => handleLike(1)} className="like-button">
                <FontAwesomeIcon icon={faThumbsDown} /> 
              </button>
              <span className="like-count">{likes[1]}</span>
            </div>
          </div>
        </div>
        <div className="image3">
          <img src={BackgroundImage4} alt="Home page background image" className="background-image" />
          <div className='like-main'>
            <Heart liked={likes[2]} likeMethod={() => handleLiked(2)} />
            <div className="like-container">
              <button onClick={() => handleLike(2)} className="like-button">
                <FontAwesomeIcon icon={faThumbsUp} /> 
              </button>
              <button onClick={() => handleLike(1)} className="like-button">
                <FontAwesomeIcon icon={faThumbsDown} /> 
              </button>
              <span className="like-count">{likes[2]}</span>
            </div>
          </div>
        </div>
      </div>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button>{count}</button>
        <button onClick={()=>setCount(count - 1)}>-</button>
    </div>
  );
};

export default Home;
