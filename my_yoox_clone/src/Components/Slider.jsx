import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './Navbar.css'
import "../App.css";

export default function SimpleSlider({slideData}){
    // console.log("SildeData",slideData)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div class='slidediv'>
        <Slider {...settings} >
          {
            slideData.map((e)=>(
              <div>
                <img src={e.image} alt={e.image} />
              </div>
            ))
          }
        </Slider>
      </div>  
    );
  }
