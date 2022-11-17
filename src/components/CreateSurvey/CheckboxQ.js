import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,pluscontent,minuscontent} from "../../Slice/OnepageSlice";
import InputContent from "./InputContent";
import "../../pages/CreateSurvey/OnePageCreate.css";
import styles from "../Dropdown/Dropdown.module.css";

function CheckboxQ(props) {


    const data = useSelector((state)=>state.onepage.survey.data);
    const temp= data.filter((data)=>data.did===props.id)
    const dispatch = useDispatch();




  const listpush = (e) => {
    dispatch(pluscontent(props.id));
  };

  const listminus = (e) => {
    dispatch(minuscontent(props.id));
  };

  const passtitle = (e) =>{
    const passs={
      id: props.id,
      item : e
    }
    dispatch(changetitle(passs));
  };




    const title = data.filter(item => item.did === props.id)[0].title
    const content = data.filter(item => item.did === props.id)[0].content


  return (
      <div className="first">
        <input  className="firsttitle" 
          placeholder="질문을 입력해주세요."
          type = "text"
          value = {title}
          onChange ={(e)=>passtitle(e.target.value)} 
        />

        <div className="firstcon">
          <div className="firstnum" >
            {content.map((item,idx) =>(
              <div className={styles.checkboxContent}> 
                <p className={styles.checkboxContentP}>☐</p>
                <InputContent id={props.id} idx={idx} />
              </div>
            ))}
          </div>
          
          {/* <button className="firstbtn" onClick={listminus}>-</button>
          <button className="firstbtn" onClick={listpush}>+</button> */}
            
        <div className={styles.checkboxSide}>  
          <button className={styles.plus} onClick={listpush}>+</button>
          <button className={styles.minus} onClick={listminus}>-</button>
        </div> 

        </div>  

      </div>
  );
}

  export default CheckboxQ;