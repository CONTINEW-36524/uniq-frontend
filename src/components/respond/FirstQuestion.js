import { defaultProps } from '@nivo/pie';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../components/Slice/RespondSlice";
import FirstContents from './FirstContents';

function FirstQuestion(props) {
    // const prevalue='';
    // const content=[];
    // const temp=[];
    const dispatch = useDispatch();
   


    const passcontent = (e) =>{
        const passs={
          id: props.data.did,
          // item : e
        }
        dispatch(changecontent(passs));
          
        
      };



        
    // if(prevalue==null)
    //   prevalue=props.data.did
    // else if(prevalue==props.data.did)
    // {
    //   content.push(props.data.con)
    //   prevalue=props.data.did
    // }
    // else
    // {
    //   <FirstContents contents={content} />
    //   content.splice(0,content.length)
    //   prevalue=props.data.did
    // }

    return (
      <div className="firstContainer">
       
            <>
            <div className="firstDiv">
              <button
                // value={idx}
                // className={"firstBtn" + (idx+1 == btnActive ? " active" : "")}
                onClick={()=>{
                    passcontent(props.data);
                    }}
              >
                ☐
              </button>
              {/* <p className="bogiPTag">{props.data.passcontent}</p> */}
            </div>
            </>
          
      </div>
    );
      
  
  }
  export default FirstQuestion;