import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent, addcheckboxanswer} from "../../Slice/RespondSlice";
import "./respond.css"

function CheckBoxQuestion(props) {
  
  let [btnActive, setBtnActive] = useState();
  let [checkAnswer, setCheckAnswer]  = useState("");

  // 저장되어 있는 응답 가져오기
  const data = useSelector((state)=>state.respond.survey.responddata);
  const index = data.findIndex(item => item.rid_question === props.data[0].id_question)
  //console.log( props.data[0].id_question)
  //console.log(data[index].answer)
  

  // 슬라이스에 응답 보내기
  const dispatch = useDispatch();
  const passcontent = (e) =>{
    const passs={
      id: props.data[0].id_question,
      item : e,
    }
    dispatch(changecontent(passs));
  };

  const toggleActive = (e) => {
    setBtnActive(e)
  };


    return (
      <div className="Qlayout">
        <h3>질문: {props.data[0].title} ?</h3>
        <div className="checkboxContainer">
          <ul className="ulBox">

            {props.data.map((item, idx) => {

              return (
                <li className="ListItem">
                  <div onClick={() => {
                    {
                      (data[index].answer).includes(item.sub_question)
                      ? setCheckAnswer(checkAnswer = (data[index].answer).replace((item.sub_question), ''))
                      : setCheckAnswer(checkAnswer = checkAnswer + (data[index].answer) + item.sub_question)
                    }
                    toggleActive()
                    setCheckAnswer(checkAnswer.replace((item.sub_question), ''))
                    passcontent(checkAnswer)
                  }}>
                    
                    <p className="checkboxText"> 
                      {((data[index].answer).includes(item.sub_question)) ? '☑' : '☐'} {item.sub_question}
                    </p>

                    <br/>
                  </div>
                </li>
              );

            })}
            
          </ul>
        </div>
      </div>
    );
  

}


export default CheckBoxQuestion;