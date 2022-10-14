
import styles from "../../pages/Onepage/Onepage.css";
import classNames from "classnames";
import {useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux/";
import { changetitle,changecontent} from "../../components/Slice/OnepageSlice";


function Third(props) {

  const title = useSelector((state)=>state.onepage.data[props.id].title);
  const content = useSelector((state)=>state.onepage.data[props.id].content);
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
     
                     <input  className="firsttitle" type = "text"
                     value={title}
                     onChange ={(e)=>passtitle(e.target.value)} />
        <div className={classNames(styles.third)}>
        {btnvalue.map((item,index) =>(
                <button className={"thirdbtn" + (index+1 == btnclick ? " thirdactive" : "")} type = "text"
                 value={index} onClick={()=>{
                  toggleActive(item);
                  passcontent(item);
                  }}>{item}</button>
                ))}
      </div>
      </>
    );
  }

export default Third;