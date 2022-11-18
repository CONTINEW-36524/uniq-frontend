import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {changecontent} from "../../components/Slice/RespondSlice";
import "./respond.css"

function LinearQuestion(props) {
  let data = [1, 2, 3, 4];
  const dispatch = useDispatch();




  const [btnclick, setbtnclick] = useState();

  const toggleActive = (e) => {
    setbtnclick(e);
    };

  const passcontent = (e) =>{
    const passs={
      id: props.data[0].id_question,
      item : e
    }
    dispatch(changecontent(passs));
  }

  return (
      <div className="Qlayout">
        <h3>질문:{props.data[0].title}?</h3>
        <div className="LinearContainer">
          <p className='leftText'>전혀 아니다</p>
          {data.map((item, idx) => {
            return (
              <div>
                
                <button
                  value={idx}
                  className={"btn" + (idx == btnclick ? "-active" : "")}
                  onClick={()=>{
                    toggleActive(idx);
                    passcontent(item.sub_question);
                    }}
                >
                  {item}
                </button>
                
              </div>
            );
          })}
          <p className='rightText'>매우 그렇다</p>
        </div>

    </div>
  );
    }
  export default LinearQuestion;
  