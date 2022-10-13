import {useRef, useState} from "react";


function Second(props) {

    const [switchOn, switchChange] = useState(false);
    const [questionc, setquestionc] = useState();
    const [question, setquestion] = useState();


    return (
      <>
                     <input  className="firsttitle" type = "text"
                     value={question}
                     onChange ={(e)=>setquestion(e.target.value)} />

                    <textarea   className="secondcon"type = "text"
            value={questionc}
                       onChange ={(e)=>setquestionc(e.target.value)} />
      </>
    );
  }

export default Second;