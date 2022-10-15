import './Home.css'
import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import CardSlider from '../../components/Card/CardSlider';
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';

function Home() {

  const [goleft, setGoleft] = useState(false);
  const [goRight, setGoRight] = useState(false);
  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };

const CLIENT_ID = "637c722561c612190048a1d771920d91";
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  return (

    <div class='detail'>

      {/* page 1 */}
      <div class="list">
        <div class="jumbotron">
          <h1 class="display-8">이제는 설문 템플릿도 공유하자! </h1>
          <h1 class="display-3">UNIQ</h1>
          <br />
          <p>설문조사 무료 디자인 툴</p>

          <div style={{ textDecoration: 'none' }}>
            <button class='btn3' onClick={openModal}> <b> 설문 생성하러 가기 </b></button> <br />
            {next ?
              <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
                <AddAsk />
              </Modal> :
              <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
                <SelectType />
              </Modal>
            }
          </div>
          
          {/* kakao login link */}
          <a href={KAKAO_AUTH_URL}>
            <button class='kakao_btn'> </button>
          </a>

        </div>
      </div>

      {/* page 2 */}
      <div class='list'>
        <div class='parent'>
          <b class='recent'>최신 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardSlider goleft={goleft} goRight={goRight} />
            <div class="next" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
          </div>

          <b class='popular'>인기있는 UNIQ 템플릿</b>
          <div class="container">
            <div class="prev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardSlider goleft={goleft} goRight={goRight} />
            <div class="next" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
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
