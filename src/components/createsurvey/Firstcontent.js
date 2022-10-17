import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changecontent} from "../../components/Slice/OnepageSlice";


function Firstcontent(props) {

  // const content = useSelector((state)=>state.onepage.data[props.id].content);
  const data = useSelector((state)=>state.onepage.data);

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


    return (
            <div >
            <input   className="title4"type = "text"
            value={content[props.idx].con}
           onChange ={(e)=>passcontent(e.target.value)} />
           </div>
                 
    );
  }

  export default Firstcontent;