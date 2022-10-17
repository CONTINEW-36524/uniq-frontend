import React from 'react';
import './modal.css';
import { useSelector, useDispatch } from "react-redux/";
import {selectOnepage, selectCard} from "../Slice/CreateSurveySlice"

const SelectType = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  const dispatch = useDispatch();

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div  className="popuptypecontainer">
        <button className="onpagetype" onClick={()=>{
            dispatch(selectOnepage())
        }}>onepage형식</button>
        <button className="cardtype" onClick={()=>{dispatch(selectCard())}}>card형식</button>
    </div>
  );
};

export default SelectType;
