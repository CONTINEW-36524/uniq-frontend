import {useRef, useState} from "react";


function Firstcontent(props) {

    
    const [questionc, setquestionc] = useState();


    return (
            <div >
            <input   className="title4"type = "text"
            value={questionc}
           onChange ={(e)=>setquestionc(e.target.value)} />
           </div>
                 
    );
  }

  export default Firstcontent;