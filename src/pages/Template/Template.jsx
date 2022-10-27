import "./Template.css"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import CardSlider from '../../components/Card/CardSlider';
import CardSlider2 from '../../components/Card/CardSlider2';
import CardSlider3 from '../../components/Card/CardSlider3';

function Template() {

  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);
  const [goleft, setGoleft] = useState(false);
  const [goRight, setGoRight] = useState(false);
  const [goleft2, setGoleft2] = useState(false);
  const [goRight2, setGoRight2] = useState(false);
  const [goleft3, setGoleft3] = useState(false);
  const [goRight3, setGoRight3] = useState(false);

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
        </div>
        <div class="tptopright">
        </div>
      </div>
      
      <div class='tplist'>
        <div class='tpparent'>
          <b class='tprecent'>최신 UNIQ 템플릿</b>
          <div class="tpcontainer">
            <div class="tpprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardSlider goleft={goleft} goRight={goRight} />
            <div class="tpnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
          </div>

          <b class='tppopular'>인기있는 UNIQ 템플릿</b>
          <div class="tpcontainer">
            <div class="tpprev" onClick={(e) => { setGoleft2(!goleft2) }}> <b>‹</b> </div>
            <CardSlider2 goleft={goleft2} goRight={goRight2} />
            <div class="tpnext" onClick={(e) => { setGoRight2(!goRight2) }}> <b>›</b> </div>
          </div>

          <b class='tpai'>AI 추천 템플릿</b>
          <div class="tpcontainer">
            <div class="tpprev" onClick={(e) => { setGoleft3(!goleft3) }}> <b>‹</b> </div>
            <CardSlider3 goleft={goleft3} goRight={goRight3} />
            <div class="tpnext" onClick={(e) => { setGoRight3(!goRight3) }}> <b>›</b> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
