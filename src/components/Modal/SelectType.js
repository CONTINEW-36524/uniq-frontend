import React from 'react';
import './Modal.css';
import { useSelector, useDispatch } from "react-redux/";
import {selectOnepage, selectCard} from "../../Slice/CreateSurveySlice"

const SelectType = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  const dispatch = useDispatch();

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className="popuptypecontainer">
      <div>
        <h5 className="onepageText">One Page 형식</h5>
        <button className="onepagetype" onClick={()=>{
            dispatch(selectOnepage())
        }}></button>
      </div>
      <div>
        <h5 className="cardText">Card 형식</h5>
        <button className="cardtype" onClick={()=>{dispatch(selectCard())}}></button>
      </div>
    </div>
  );
};

export default SelectType;
