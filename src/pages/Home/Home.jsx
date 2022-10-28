import './Home.css'
import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import CardSlider from '../../components/Card/CardSlider';
import CardSlider2 from '../../components/Card/CardSlider2';
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import BannerSlider from '../BannerSlider';
function Home() {

  const [goleft1, setGoleft1] = useState(false);
  const [goRight1, setGoRight1] = useState(false);
  const [goleft2, setGoleft2] = useState(false);
  const [goRight2, setGoRight2] = useState(false);

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
            <CardSlider goleft={goleft1} goRight={goRight1} />
            <div class="next1" onClick={(e) => { setGoRight1(!goRight1) }}> <b>›</b> </div>
          </div>

          <b class='popular'>인기있는 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev2" onClick={(e) => { setGoleft2(!goleft2) }}> <b>‹</b> </div>
            <CardSlider2 goleft={goleft2} goRight={goRight2} />
            <div class="next2" onClick={(e) => { setGoRight2(!goRight2) }}> <b>›</b> </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div class="list">
        <div class="three">
          <h3 class="intext1">다양한 형태의 설문지 폼</h3>
          <br/>
          <h5 class="intext2">One page형 Card형 원하는 형식으로 생성해보세요.</h5>
        </div>
      </div>

    </div>
  );
}
export default Home;
