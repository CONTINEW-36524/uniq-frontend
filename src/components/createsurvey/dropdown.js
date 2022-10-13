import {useRef, useState} from "react";
import useDetectClose from "../../hooks/useDetectClose";
import "../../pages/Onepage/Onepage.css";
import styles from "./Dropdown.module.css";
import classNames from "classnames";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import First from "./First"
import Second from "./Second"
import Third from "./Third";





const DropDown = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [question, setquestion] = useState(['객관식','주관식','선형배율']);
  const [content, setContent] = useState('객관식');
  const [switchOn, switchChange] = useState(false);

  const selectComponent = {
    객관식: <First />,
    주관식: <Second />,
    선형배율: <Third />,
  };


  // console.log({isOpen});
  // console.log({dropDownRef});


  
  return (
    <div className="layout">
      {content && <content>{selectComponent[content]}</content>}
      <button className="change" type="button"  onClick={() => {switchChange(!switchOn);}}>버튼5</button>
      <div>
      <button className="change" ref={dropDownRef}
        onClick={() =>setIsOpen(!isOpen)}
      >
        버튼
      </button>
     
      
      <ul  className={classNames(styles.menu, {[styles.active]:isOpen})}>
      { question.map((item)=>(
                 <li><button className={classNames(styles.list)} onClick={() =>setContent(item)}>{item}</button></li>
                 )
             )}
    
      </ul>
      </div>

      
    </div>
  );
};

export default DropDown;