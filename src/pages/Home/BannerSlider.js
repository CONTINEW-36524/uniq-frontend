// Import css files
// Import css files
import "./BannerSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import sampleImg1 from '../../assets/banner1.png';
import sampleImg2 from '../../assets/banner2.png';
import sampleImg3 from '../../assets/banner3.png';


const Wrap = styled.div`
margin: 5% auto;
width: 100%;
overflow: hidden;
place-items: center;
.slick-prev:before {
  opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
  color: black; // 버튼 색은 검은색으로
  left: 0;
}
.slick-next:before {
  opacity: 1;
  color: black;
}`;

export default class BannerSlider extends Component {
  render() {

   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      centerMode: true,
      centerPadding: "500px",
      //adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      
      responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 1200, // 화면 사이즈 1200px
          settings: {
            slidesToShow: 3,
          }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
      
    };
    return (
      <div>
  
        <Wrap>
        <Slider {...settings}>
          <div>
          <img class = "sliderImage" src={ sampleImg1 } />
          </div>
          <div>
          <img class = "sliderImage" src={ sampleImg2 } />
          </div>
          <div>
          <img class = "sliderImage" src={ sampleImg1 } />
          </div>
          <div>
          <img class = "sliderImage" src={ sampleImg3 } />
          </div>
          <div>
          <img class = "sliderImage" src={ sampleImg1 } />
          </div>
          <div>
          <img class = "sliderImage" src={ sampleImg2 } />
          </div>
        </Slider>
        </Wrap>
      </div>
    );
  }
}