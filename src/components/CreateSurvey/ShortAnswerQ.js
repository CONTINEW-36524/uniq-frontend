import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,changecontent} from "../../Slice/OnepageSlice";

function ShortAnswerQ(props) {

  const data = useSelector((state)=>state.onepage.survey.data);
  const temp= data.filter((data)=>data.id===props.id);
  const title = data.filter(item => item.id === props.id)[0].title;
  const content = data.filter(item => item.id === props.id)[0].content;
  const dispatch = useDispatch();

  const passtitle = (e) =>{
    const passs={
      id: props.id,
      item : e
    }
    dispatch(changetitle(passs));

  };

  const passcontent = (e) =>{
    const passs={
      id: props.id,
      idx:0,
      item : e
    }
    dispatch(changecontent(passs));

  };
  



  return (
    <>
      <div className="second">
        <input className="secondtitle" type = "text"
          placeholder="질문을 입력해주세요."
          value={title}
          onChange ={(e)=>passtitle(e.target.value)} 
        />

        <textarea className="secondcon" type = "text"
          value={content[0].con}
          onChange ={(e)=>passcontent(e.target.value)} 
        />
      </div>
    </>
  );
}

export default ShortAnswerQ;