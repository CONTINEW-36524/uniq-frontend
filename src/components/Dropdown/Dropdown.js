import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetype, deletecontent} from "../Slice/OnepageSlice";
import useDetectClose from "../../hooks/useDetectClose";
import "../../pages/CreateSurvey/OnePageCreate.css";
import styles from "./Dropdown.module.css";
import classNames from "classnames";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RadioButtonQ from "../CreateSurvey/RadioButtonQ"
import ShortAnswerQ from "../CreateSurvey/ShortAnswerQ"
import CheckboxQ from "../CreateSurvey/CheckboxQ";
import LinearQ from "../CreateSurvey/LinearQ"
import { FcList } from "react-icons/fc";

import uuid from "react-uuid";
import Toggle from './Toggle';




const DropDown = (props) => {
  const dropDownRef = useRef(null);
  const data= useSelector((state)=>state.onepage.survey.data);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [question, setquestion] = useState(['객관식', '체크박스', '주관식','선형배율']);
  const dispatch = useDispatch();
  const [content, setContent] = useState('객관식');
  const [switchOn, switchChange] = useState(false);
  const [btnclick, setbtnclick] = useState();
  const selectComponent = {
    객관식: <RadioButtonQ id={props.id}/>,
    체크박스: <CheckboxQ id={props.id}/>,
    주관식: <ShortAnswerQ id={props.id}/>,
    선형배율: <LinearQ id={props.id}/>,
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
    dispatch(changetype(passs));

  };
  
  const handleDelete =(e) => {
    // console.log(e.target.value)
    dispatch(deletecontent(e.target.value));
  }
  const selectCom = () =>{
    const temp = data.filter(item => item.did === props.id)
    // console.log(temp)
  
    const type = temp[0].type
    // console.log({type})
    return (selectComponent[type])
  }

  // console.log({isOpen});
  // console.log({dropDownRef});

  const [isSidebarOpen2, closeSidebar2] = useState(false);
  const toggleSidebar2 = () =>{
    closeSidebar2(isSidebarOpen => !isSidebarOpen)
  }
  
  return (

    <div className={styles.layout}>

      <content>{selectCom()}</content>

      <div className={styles.side}>
        <Toggle id={props.id}/>
          
        <button className={styles.change} ref={dropDownRef}
          onClick={() =>setIsOpen(!isOpen)}>
            ▼
        </button>


        <button className={styles.option} onClick={()=>toggleSidebar2()}>☰</button>
          
        <button value={props.id} className={styles.delete} onClick={handleDelete}>X</button>
        
        <ul  className={classNames(styles.menu, {[styles.active]:isOpen})}>
        { question.map((item)=>(
          <li><button className={classNames(styles.list)} onClick={() =>{ pass(item)}}>{item}</button></li>)
        )}
        </ul>

      </div>

      
    </div>
  );
};

export default DropDown;