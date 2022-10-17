import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changecontent} from "../../components/Slice/OnepageSlice";


function Firstcontent(props) {

  const content = useSelector((state)=>state.onepage.data[props.id].content);
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
    border: "1px solid teal"
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

export default Firstcontent;