import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../components/Slice/RespondSlice";

function FirstQuestion(props) {
    const dispatch = useDispatch();
  
    let [btnActive, setBtnActive] = useState();
  
    const toggleActive = (e) => {
      setBtnActive(e)
      };


    const passcontent = (e) =>{
        const passs={
          id: props.data.did,
          item : e
        }
        dispatch(changecontent(passs));
          
        
      };

    return (
      <div className="Qlayout">
<h3>질문: ____ ?</h3>

<div className="radioContainer">
  {props.data.map((item, idx) => {
    return (
      <div>
        <button
          value={idx}
          className={"radioBtn" + (idx == btnActive ? "-active" : "")}
          onClick={()=>{
            toggleActive(idx+1);
            passcontent(item.con);
            }}
        >
        o {item}
        </button>
      </div>
    );
  })}
</div>
      </div>
    );
  }



  export default FirstQuestion;