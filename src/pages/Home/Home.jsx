import './Home.css'
import React from "react";
import { Link } from "react-router-dom";
// import Owl from './Carousel';

function Home() {
  return (
    <div class='detail'>


    {/* page 1 */}
    <div class="list">
      <div class="jumbotron">
        <h1 class="display-8">이제는 설문 템플릿도 공유하자! </h1>
        <h1 class="display-3">UNIQ</h1>
        <br/>
        <p>설문조사 무료 디자인 툴</p> 
        <Link to="/createSurvey">
        <button class='btn1' > <b> 설문 생성하러 가기 </b></button> <br/>
        </Link>
        
        <button class='btn2'> <b>로그인하기</b> </button>
        
       
      </div>
    </div>
    

    {/* page 2 */}
    <div class='list'>
      <div className="row">
        <div className="col-md-12">
          {/* <Owl/> */}
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