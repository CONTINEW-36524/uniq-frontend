import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../Slice/RespondSlice";

function RadioQuestion(props) {
  const dispatch = useDispatch();
  console.log(props)
  let [btnActive, setBtnActive] = useState();

  const toggleActive = (e) => {
    setBtnActive(e)
  };

  const passcontent = (e) =>{
    const passs={
      id: props.data[0].id_question,
      item : e
    }
    //console.log(props.data[0].id_question);
    dispatch(changecontent(passs));
  };

  const data = useSelector((state)=>state.respond.survey.responddata);
  //console.log(data)
  const index = data.findIndex(item => item.rid_question === props.data[0].id_question)
  //console.log(props.data[0].id_question + data[index].answer)

  return (
    <div className="Qlayout">
      <h3>질문: {props.data[0].title} ?</h3>

      <div className="firstContainer">
        {props.data.map((item, idx) => {
          return (
            <div>
              <button
                value={idx}
                className={"radioBtn" + (item.sub_question === data[index].answer ? "-active" : "")}
                
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