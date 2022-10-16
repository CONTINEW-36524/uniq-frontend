import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,pluscontent,minuscontent} from "../../components/Slice/OnepageSlice";
import Firstcontent from "./Firstcontent";


function First(props) {

    // const title = useSelector((state)=>state.onepage.data[props.id].title);
    // const content = useSelector((state)=>state.onepage.data[props.id].content);

    const data = useSelector((state)=>state.onepage.data);

    const dispatch = useDispatch();

    const listpush = (e) => {
      dispatch(pluscontent(props.id));
    };

    const listminus = (e) => {
      dispatch(minuscontent(props.id));
    };

    const passtitle = (e) =>{
      const passs={
        id: props.id,
        item : e
      }
      dispatch(changetitle(passs));

    };

    const title = data.filter(item => item.id === props.id)[0].title
    const content = data.filter(item => item.id === props.id)[0].content
    return (
      <div className="first">
       <input  className="firsttitle" type = "text" placeholder='질문을 입력하세요'
                     value={title}
                     onChange ={(e)=>passtitle(e.target.value)} />
        <div className="firstcon">
        <div className="firstnum" >
          <ul className="firstlist">
          {content.map((item,idx) =>(
            <div >
            <li><Firstcontent id={props.id} idx={idx} /></li>
           </div>
          ))}
          </ul>
          </div>
          <button className="firstbtn" onClick={listpush} >+</button>
          <button className="firstbtn" onClick={listminus} >-</button>
          </div>        
      </div>
    );
  }

  export default First;