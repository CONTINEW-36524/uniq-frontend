import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { conincreament} from "../../components/Slice/OnepageSlice";
import Firstcontent from "./Firstcontent";


function First(props) {

    
    const [questionc, setquestionc] = useState();
    const [question, setquestion] = useState();
    const Oblist = useSelector((state)=>state.onepage.Oblist);
    const dispatch = useDispatch();


    return (
      <div className="first">
       <input  className="firsttitle" type = "text"
                     value={question}
                     onChange ={(e)=>setquestion(e.target.value)} />
        <div className="firstcon">
        <div className="firstnum" >
          {Oblist.map((item) =>(
            <div >
            <Firstcontent />
           </div>
          ))}
          </div>
          <button className="firstbtn" onClick={()=>dispatch(conincreament())} >+</button>
          </div>        
      </div>
    );
  }

  export default First;