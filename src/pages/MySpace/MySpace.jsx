import "./MySpace.css"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';

function MySpace(props) {
  const selectList = ["", "category1", "category2", "category3"];
  const [selected, setSelected] = useState("");
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

  const surveyList = [["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"],
  ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"]];
  // db에서 나중에 data 가져오기.

  const handleSelect = (e) => {
    setSelected(e.target.vlaue);
  }

  return (
    <div id="mswrapper">
      <div class="mstop">
        <button class='mscreate' onClick={openModal}> 설문 생성하기</button>
        {next ?
          <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
            <AddAsk />
          </Modal> :
          <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
            <SelectType />
          </Modal>
        }
      </div>

      <hr class="mstt" />
      <div class="msmiddle">
        <button class="msbtn" >나의 UNIQ</button>
        <button class="msbtn" >UNIQ 찜 목록</button>
        <button class="msbtn" >최근 설문지</button>
      </div>

      <hr class="mstt" />
      <div class="mscategory">
        <div class="msatext">카테고리 선택&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="mscatedrop">
          <select onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
              <option value={item} kye={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button class="mssearch">검색</button>
      </div>

      <hr class="mstt" />
      <div class="msbottom">
        <div id="msbox">
          <div class="msboximg">
            <button class="msplus" onClick={openModal}>+</button>
            {next ?
              <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
                <AddAsk />
              </Modal> :
              <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
                <SelectType />
              </Modal>
            }
          </div>
          <div class="msboxdata">
            <h1 class="mshead">설문 생성하기</h1>
          </div>
        </div>

        {surveyList.map((item) => (
          <div id="msbox">
            <div class="msboximg" />
            <div class="msboxdata">
              <h1 class="mshead">{item[0]}</h1>
              <span class="msboxcontent">{item[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySpace;
