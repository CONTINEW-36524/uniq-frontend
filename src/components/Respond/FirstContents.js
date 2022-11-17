import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../Slice/RespondSlice";

function FirstContents(props) {
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
      <div className="firstContainer">
        {props.data.map((item, idx) => (
          
            <>
            <div className="firstDiv">
              <button
                value={idx}
                className={"firstBtn" + (idx+1 == btnActive ? " active" : "")}
                onClick={()=>{
                    toggleActive(idx+1);
                    passcontent(item.con);
                    }}
              >
                ☐
              </button>
              <p className="bogiPTag">{item.con}</p>
            </div>
            </>
          
        ))}
      </div>


    );
  }
  export default FirstContents;