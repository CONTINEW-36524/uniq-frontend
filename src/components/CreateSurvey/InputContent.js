import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changecontent} from "../Slice/OnepageSlice";


function InputContent(props) {


  // const content = useSelector((state)=>state.onepage.data[props.id].content);
  const data = useSelector((state)=>state.onepage.survey.data);

  const content = data.filter(item => item.id === props.id)[0].content
  console.log(content)
  const [questionc, setquestionc] = useState();
  const dispatch = useDispatch();




  const passcontent = (e) =>{
    const passs={
      id: props.id,
      idx:props.idx,
      item : e
    }
    dispatch(changecontent(passs));

  };

  const inputStyle = {
    width: "360px",
    height: "30px",
    margin: "5px",
    border: "none"
  };


  return (
    <div>
      <input style={inputStyle} type = "text"
        placeholder="보기를 입력해주세요."
        value={content[props.idx].con}
        onChange ={(e)=>passcontent(e.target.value)} 
      />
    </div>
                 
  );
}

export default InputContent;