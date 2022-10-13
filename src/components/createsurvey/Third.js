import {useRef, useState} from "react";
import styles from "../../pages/Onepage/Onepage.css";
import classNames from "classnames";


function Third(props) {

    const [switchOn, switchChange] = useState(false);
    const [btnclick, setbtnclick] = useState();
    const [question, setquestion] = useState();
    const btnvalue=[1,2,3,4,5]

    const toggleActive = (e) => {
        setbtnclick((prev) => {
          return e.target.value;
        });
      };


    return (
        <>
     
                     <input  className="firsttitle" type = "text"
                     value={question}
                     onChange ={(e)=>setquestion(e.target.value)} />
        <div className={classNames(styles.third)}>
        {btnvalue.map((item,index) =>(
                <button className={"thirdbtn" + (index == btnclick ? " thirdactive" : "")} type = "text"
                 value={index} onClick={toggleActive}>{item}</button>
                ))}
      </div>
      </>
    );
  }

export default Third;