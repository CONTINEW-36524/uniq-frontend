import "./Template.css"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Modal from "../../components/Modal/Modal"
import SelectType from "../../components/Modal/SelectType.js"
import { exit } from "../../Slice/CreateSurveySlice.js"
import AddAsk from '../../components/Modal/AddAsk';
import CardSlider from '../../components/Card/CardSlider';
import CardSlider2 from '../../components/Card/CardSlider2';
import CardSlider3 from '../../components/Card/CardSlider3';
import axios from "axios";

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
  const [recent, setRecent] = useState([]);
  const [popular, setPopular] = useState([]);
 
  useEffect(()=>{
    axios.get('/survey-read-service/api/template/recent')
    .then(function(response){
      console.log(response.data)
      setRecent(response.data)
      
      console.log('마운트');
    
    }).catch(function(error){
      console.log("에러")
    });

    axios.get('/survey-read-service/api/template/popular')
    .then(function(response){
      console.log(response.data)
      setPopular(response.data)

      console.log('마운트');
    }).catch(function(error){
      console.log("에러")
    });
  }, [])

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
      <div className="tptop">
        <div className="tptopleft">
          <h1 className="tptopcontent">
            당신에게 맞는 템플릿을 찾아보세요!
          </h1>
          <p></p>
          <>UNIQ는 다양한 템플릿을 통해 당신에게 적합한 설문지를 생성하도록 도와줍니다.</>
          <p></p>
          <button className="tpcreate" onClick={openModal}>설문 생성하러 가기</button>
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
        <div className="tptopright">
        </div>
      </div>
      
      <div className='tplist'>
        <div className='tpparent'>
          <b className='tprecent'>최신 UNIQ 템플릿</b>
          <div className="tpcontainer">
            <div className="tpprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardSlider data={recent} goleft={goleft} goRight={goRight} />
            <div className="tpnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
          </div>

          <b className='tppopular'>인기있는 UNIQ 템플릿</b>
          <div className="tpcontainer">
            <div className="tpprev" onClick={(e) => { setGoleft2(!goleft2) }}> <b>‹</b> </div>
            <CardSlider2 data={popular} goleft={goleft2} goRight={goRight2} />
            <div className="tpnext" onClick={(e) => { setGoRight2(!goRight2) }}> <b>›</b> </div>
          </div>

          <b className='tpai'>AI 추천 템플릿</b>
          <div className="tpcontainer">
            <div className="tpprev" onClick={(e) => { setGoleft3(!goleft3) }}> <b>‹</b> </div>
            <CardSlider3 goleft={goleft3} goRight={goRight3} />
            <div className="tpnext" onClick={(e) => { setGoRight3(!goRight3) }}> <b>›</b> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
