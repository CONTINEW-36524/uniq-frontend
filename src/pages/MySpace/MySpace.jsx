import "./MySpace.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import boximg from "../../assets/showingImage.png"
import { useSelector, useDispatch } from "react-redux/";
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import {exit} from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';

function MySpace(props) {
  const selectList = ["", "category1", "category2", "category3"];
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch()
  const next = useSelector((state)=>state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };

  const MyUNIQ = () => {
    alert("나의 UNIQ");
  };
  const FavoriteUNIQ = () => {
    alert('UNIQ 찜 목록');
  };
  const RecentSurvey = () => {
    alert("최근 설문지");
  };
  const handleSelect = (e) => {
    setSelected(e.target.vlaue);
  }

  return (
    <div id="wrapper">
      <div class="top">
      <button class='create' onClick={openModal}> 설문 생성하기</button> 
          { next ?
           <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
           <AddAsk/>
           </Modal>:
          <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
          <SelectType />
          </Modal>
          }
      </div>

      <hr class="tt" />
      <div class="middle">
        <button class="msbtn" onClick={MyUNIQ}>나의 UNIQ</button>
        <button class="msbtn" onClick={FavoriteUNIQ}>UNIQ 찜 목록</button>
        <button class="msbtn" onClick={RecentSurvey}>최근 설문지</button>
      </div>

      <hr class="tt" />
      <div class="category">
        <div class="atext">카테고리 선택&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="catedrop">
          <select onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
              <option value={item} kye={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button class="search">검색</button>
      </div>

      <hr class="tt" />
      <div class="buttom">
        <div id="box">
          <div class="boximg">
            <Link to="/createSurvey">
              <button class="plus">+</button>
            </Link>
          </div>
          <div class="boxdata">
            <h1 class="head">설문 생성하기</h1>
          </div>
        </div>

        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
        <div id="box">
          <div class="boximg" />
          <div class="boxdata">
            <h1 class="head">설문조사 이름</h1>
            <span class="boxcontent">카테고리</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySpace;
