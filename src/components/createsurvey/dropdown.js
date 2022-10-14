import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetype} from "../../components/Slice/OnepageSlice";
import useDetectClose from "../../hooks/useDetectClose";
import "../../pages/Onepage/Onepage.css";
import styles from "./Dropdown.module.css";
import classNames from "classnames";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import First from "./First"
import Second from "./Second"
import Third from "./Third";





const DropDown = (props) => {
  const dropDownRef = useRef(null);
  const type = useSelector((state)=>state.onepage.data[props.id].type);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [question, setquestion] = useState(['객관식','주관식','선형배율']);
  const dispatch = useDispatch();
  const [content, setContent] = useState('객관식');
  const [switchOn, switchChange] = useState(false);
  const [btnclick, setbtnclick] = useState();
  const selectComponent = {
    객관식: <First id={props.id} />,
    주관식: <Second id={props.id}/>,
    선형배율: <Third id={props.id}/>,
  };
  // console.log(type);
  const toggleActive = (e) => {
    setbtnclick(!btnclick)
    };


  const pass = (e) => {
    const passs={
      id: props.id,
      item : e
    }
    // console.log(passs);
    dispatch(changetype(passs));
   
  };


  // console.log({isOpen});
  // console.log({dropDownRef});


  
  return (
    <div className="layout">
      {type && <content>{selectComponent[type]}</content>}
      <button className={"thirdbtn" + (btnclick ? " thirdactive" : "")} type = "text"
                 onClick={(toggleActive)}>필수</button>
      <div>
      <button className="change" ref={dropDownRef}
        onClick={() =>setIsOpen(!isOpen)}
      >
        버튼
      </button>
     
      
      <ul  className={classNames(styles.menu, {[styles.active]:isOpen})}>
      { question.map((item)=>(
                 <li><button className={classNames(styles.list)} onClick={() =>{ pass(item)}}>{item}</button></li>
                 )
             )}
    
      </ul>
      </div>

      
    </div>
  );
};

export default DropDown;