import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../Slice/RespondSlice";

function RadioQuestion(props) {
    const dispatch = useDispatch();
  
    let [btnActive, setBtnActive] = useState();
  
    const toggleActive = (e) => {
      setBtnActive(e)
      };


    const passcontent = (e) =>{
        const passs={
          id: props.data[0].id_question,
          item : e
        }
        dispatch(changecontent(passs));
          
        
      };

    return (
      <div className="Qlayout">
<h3>질문: {props.data[0].title} ?</h3>

<div className="firstContainer">
  {props.data.map((item, idx) => {
    console.log(item)
    return (
      <div className="firstDiv">
        <button
          value={idx}
          className={"radioBtn" + (idx == btnActive ? "-active" : "")}
          onClick={()=>{
            toggleActive(idx);
            passcontent(item.sub_question);
            }}
        >
        o {item.sub_question}
        </button>
      </div>
    );
  })}
</div>
      </div>
    );
  }



  export default RadioQuestion;