import './Home.css'
import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import CardSlider from '../../components/Card/CardSlider';
import CardSlider2 from '../../components/Card/CardSlider2';
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import BannerSlider from '../BannerSlider';
import formImg from '../../assets/formImg.jpg';
import templateImg from '../../assets/templateImg.gif';
import qrImg from '../../assets/qrImg.png';
import axios from 'axios';


function Home() {

  const [goleft1, setGoleft1] = useState(false);
  const [goRight1, setGoRight1] = useState(false);
  const [goleft2, setGoleft2] = useState(false);
  const [goRight2, setGoRight2] = useState(false);
  const [recent, setRecent] = useState([]);
  const [popular, setPopular] = useState([]);
  
  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {'GmarketSansMedium'
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };

  useEffect(()=>{
    axios.get('/api/template/recent')
    .then(function(response){
      console.log(response.data)
      setRecent(response.data)
      
      console.log('마운트');
    
    }).catch(function(error){
      console.log("에러")
    });

    axios.get('/api/template/popular')
    .then(function(response){
      console.log(response.data)
      setPopular(response.data)

      console.log('마운트');
    }).catch(function(error){
      console.log("에러")
    });
  }, [])

  return (

    <div class='detail'>

      {/* page 1 */}
      
      <div class="list">
        {/* <div class="jumbotron">
          <h1 class="display-8">이제는 설문 템플릿도 공유하자! </h1>
          <h1 class="display-3">UNIQ</h1>
          <br />
          <p>설문조사 무료 디자인 툴</p>

          <div style={{ textDecoration: 'none' }}>
            <button class='btn3' onClick={openModal}> <b> 설문 생성하러 가기 </b></button> <br /> */}
       
          <BannerSlider />
        {/* {next ?
          <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
            <AddAsk />
          </Modal> :
          <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
            <SelectType />
          </Modal>
        } */}

      </div>
  




      {/* page 2 */}
      <div class='list1'>
        <div class='parent'>
          <b class='recent'>최신 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev1" onClick={(e) => { setGoleft1(!goleft1) }}> <b>‹</b> </div>
            <CardSlider data={recent} goleft={goleft1} goRight={goRight1} />
            <div class="next1" onClick={(e) => { setGoRight1(!goRight1) }}> <b>›</b> </div>
          </div>

          <b class='popular'>인기있는 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev2" onClick={(e) => { setGoleft2(!goleft2) }}> <b>‹</b> </div>
            <CardSlider2 data={popular} goleft={goleft2} goRight={goRight2} />
            <div class="next2" onClick={(e) => { setGoRight2(!goRight2) }}> <b>›</b> </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div class="list2">
       
          <div class='textSet1'>
          <h3 class="intext1">다양한 형태의 설문지 폼</h3>
          <br/>
          <h5 class="intext2">One page형 Card형 원하는 형식으로 생성해보세요.</h5>
          <div class='button'>
          <a href="/template">
                <button class='StartBtn'>지금 시작하기</button>
          </a>
          </div>
          </div>
          <br/>
          <br/>
          
          
          <div>
          <img src={ formImg } class='formImg' />
          </div>
          <br/>
          
        
      </div>

      {/* page 3 */}
      <div class="list2">
      <div>
          <img src={ templateImg } class='templateImg' />
          </div>
          <div class='textSet2'>
          <h3 class="intext3">다양한 템플릿으로 누구나 쉽게</h3>
          <br/>
          <h5 class="intext4">인기있는 템플릿,     최신 템플릿,    AI추천 맞춤 템플릿까지!</h5>
          <div class='button'>
          <a href="/template">
                <button class='StartBtn'>지금 시작하기</button>
          </a>
          </div>
          </div>
          <br/>
          <br/>
          
          <br/>
          
        
      </div>
      {/* page 3 */}
      <div class="list2">
       
          <div class='textSet'>
          <h3 class="intext5">QR코드로 간편하게 공유</h3>
          <br/>
          <h5 class="intext6">길고 복잡한 링크주소 대신 QR코드로 쉽게 공유하세요.</h5>
          <div class='button'>
          <a href="/template">
                <button class='StartBtn'>지금 시작하기</button>
          </a>
          </div>
          </div>
          <br/>
          <br/>
          
          
          <div>
          <img src={ qrImg } class='qrImg' />
          </div>
          <br/>
          
        
      </div>

    </div>
  );
}
export default Home;
