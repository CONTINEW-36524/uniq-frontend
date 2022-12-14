import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../Slice/RespondSlice";

function ShortQuestion(props) {

  const data = useSelector((state)=>state.respond.survey.responddata);
  const dispatch = useDispatch();

  const passcontent = (e) =>{
    const passs={
      id: props.data[0].id_question,
      item : e
    }
    dispatch(changecontent(passs));

  };

  const index = data.findIndex(item => item.rid_question === props.data[0].id_question)  
  //console.log(index)
  //console.log(props.data[0].id_question + data[index].answer)
    
  return (
   
    <div className="Qlayout">
      <h3>질문: {props.data[0].title} ?</h3>
      <textarea className="SecondRespond" 
        type = "text" 
        value={data[index].answer}
        onChange ={(e)=>passcontent(e.target.value)}
        placeholder="답변을 입력해주세요."
      />
    </div>

  );
}

export default ShortQuestion;