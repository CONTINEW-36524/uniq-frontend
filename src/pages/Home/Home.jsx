import './Home.css'
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import CardSlider from '../../components/Card/CardSlider';

function Home() {

  const [goleft,setGoleft] = useState(false);
  const [goRight,setGoRight] = useState(false);


  return (

    <div class='detail'>

      {/* page 1 */}
      <div class="list">
        <div class="jumbotron">
          <h1 class="display-8">이제는 설문 템플릿도 공유하자! </h1>
          <h1 class="display-3">UNIQ</h1>
          <br/>
          <p>설문조사 무료 디자인 툴</p> 
          <Link to="/createSurvey" style={{ textDecoration: 'none' }}>
          <button class='btn3' > <b> 설문 생성하러 가기 </b></button> </Link>
          <Link to="/createSurvey" style={{ textDecoration: 'none' }}>
          <button class='btn4'> <b>로그인하기</b> </button> </Link>
        </div>
      </div>
    

      {/* page 2 */}
      <div class='list'>
        <div class='parent'>
          <b class='recent'>최신 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev" onClick={(e) => {setGoleft(!goleft)}}> <b>‹</b> </div>
              <CardSlider goleft = {goleft} goRight = {goRight}/>
            <div class="next" onClick={(e) => {setGoRight(!goRight)}}> <b>›</b> </div>
          </div>

          <b class='popular'>인기있는 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev" onClick={(e) => {setGoleft(!goleft)}}> <b>‹</b> </div>
              <CardSlider goleft = {goleft} goRight = {goRight}/>
            <div class="next" onClick={(e) => {setGoRight(!goRight)}}> <b>›</b> </div>
          </div>
        </div>
      </div>



      {/* page 3 */}
      <div class="list">
        <div class="three">
          <h3 class="intext"> 어쩌구저쩌구3</h3>
        </div>
      </div>


    </div>
  );
}

export default Home;