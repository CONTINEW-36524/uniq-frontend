
import onepageStyles from "../../pages/Onepage/Onepage.css";
import classNames from "classnames";
import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,changecontent} from "../../components/Slice/OnepageSlice";
import styles from "./Dropdown.module.css";

function Third(props) {

  const data = useSelector((state)=>state.onepage.survey.data);
  const temp= data.filter((data)=>data.id===props.id);
  const title = data.filter(item => item.id === props.id)[0].title;
  const content = data.filter(item => item.id === props.id)[0].content;
  const dispatch = useDispatch();
  const [switchOn, switchChange] = useState(false);
  const [btnclick, setbtnclick] = useState();
  const [question, setquestion] = useState();
  const btnvalue=[1,2,3,4,5]

  const passtitle = (e) =>{
    const passs={
      id: props.id,
      item : e
    }
    dispatch(changetitle(passs));
  
  };

  const toggleActive = (e) => {
    setbtnclick(e)
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
      <div className="third">
        <input className="thirdtitle" 
          type = "text"
          value={title}
          placeholder="질문을 입력해주세요."
          onChange ={(e)=>passtitle(e.target.value)} 
        />

        <div className="thirdCon">
          <div className={classNames(onepageStyles.third)}>
            {btnvalue.map((item,index) =>(
            <button className={"thirdbtn" + (index+1 == btnclick ? " thirdactive" : "")} type = "text"
              value={index} onClick={()=>{
              toggleActive(item);
              passcontent(item);
              }}>{item}</button>
            ))}
          </div>
          
        </div>

      </div>
    </>
  );
}

export default Third;