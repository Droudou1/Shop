import { useState } from 'react';
import '../css/slider.css';
import { sliderItems } from '../data/slidesdata';
import {Link} from "react-router-dom";

export default function Slider(){
  const [slideIndex,setSlideIndex] = useState(0);
  function handleClick(direction){
    if(direction === "right"){
      slideIndex === 2 ? setSlideIndex(0) : setSlideIndex((prevslideindex) => prevslideindex + 1 );
    } else{
      slideIndex === 0 ? setSlideIndex(2) : setSlideIndex((prevslideindex) => prevslideindex - 1);
    };
  };
  const wrapperclass =() => {
    if (slideIndex === 0){
      return('wrapper');
    };
    if(slideIndex === 1 ){
      return('wrapper second');
    };
    if(slideIndex === 2){
      return('wrapper third');
    };
  };


  return(
    <div className="slider">
      <div onClick={() => {handleClick("left")}} className="arrow left">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className={wrapperclass()}>
        {sliderItems.map((slider) => {
          const style = {
            backgroundColor: `#${slider.bg}`
          }
          return(
            <div style={style} key={slider.id} className="slide">
              <div className="img-container">
                <img className="img" src={slider.img}></img>
              </div>
              <div className='info-container'>
                <h1>{slider.title}</h1>
                <p>{slider.desc}</p>
                <Link to="products">
                  <button className='shop-now-btn'>SHOP NOW</button>
                </Link>
               
              </div>
            </div>
          );
          
        })};
        
      </div>
      <div onClick={() => {handleClick('right')}} className='arrow right'>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};