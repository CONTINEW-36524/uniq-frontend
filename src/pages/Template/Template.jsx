
import "./Template.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/";
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import CardSlider from '../../components/Card/CardSlider';

function Template() {

  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);
  const [goleft, setGoleft] = useState(false);
  const [goRight, setGoRight] = useState(false);

  // const recentList = [["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"]];
  // // db에서 나중에 data 가져오기.
  // const popularList = [["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"], ["설문조사 이름", "#카테고리"]];

  const openModal = () => {
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };

  return (
    <div id="tpwrapper">
      <div class="tptop">
        <div class="tptopleft">
          <h1 class="tptopcontent">
            당신에게 맞는 템플릿을 찾아보세요!
          </h1>
          <p></p>
          <>UNIQ는 다양한 템플릿을 통해 당신에게 적합한 설문지를 생성하도록 도와줍니다.</>
          <p></p>
          <button class="tpcreate" onClick={openModal}>설문 생성하러 가기</button>
          {next ?
            <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
              <AddAsk />
            </Modal> :
            <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
              <SelectType />
            </Modal>
          }
          <p></p>
          <Link to="/login">
            <button class="tplogin">로그인 하기</button>
          </Link>
        </div>
        <div class="tptopright">

        </div>

      </div>
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
      {/* <div class="recentTem">
          <b>최신 UNIQ 템플릿</b>
        </div>
      <div class="tpbottom">

        {recentList.map((item) => (
          <div id="tpbox">
            <div class="tpboximg" />
            <div class="tpboxdata">
              <h1 class="tphead">{item[0]}</h1>
              <span class="tpboxcontent">{item[1]}</span>
            </div>
          </div>
        ))}
      </div>
      <hr class="tptt" />
      <div class="popularTem">
          <b>인기있는 UNIQ 템플릿</b>
        </div>
      <div class="tpbottom">
        {popularList.map((item) => (
          <div id="tpbox">
            <div class="tpboximg" />
            <div class="tpboxdata">
              <h1 class="tphead">{item[0]}</h1>
              <span class="tpboxcontent">{item[1]}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Template;
