import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../components/Slice/RespondSlice";

function SecondQuestion(props) {
  
  const data = useSelector((state)=>state.respond.survey.responddata);
    const dispatch = useDispatch();


    const passcontent = (e) =>{
      const passs={
        id: props.data.id,
        item : e
      }
      dispatch(changecontent(passs));
  
    };

    const answer = data.filter(item => item.id == props.data.id)[0].answer
    console.log(props.data.id)
    console.log(data)
    // const answer = data.filter(item => item.id === props.id)[0].answer
  
   
  
    return (
      <div className="firstContainer">
         <textarea className="secondcon" type = "text"
          value={answer}
          onChange ={(e)=>passcontent(e.target.value)} 
        />
      </div>
    );
  }
  export default SecondQuestion;