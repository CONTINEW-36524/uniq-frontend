import React, { useEffect,useState } from 'react';

function SecondQuestion(props) {
  
    let [btnActive, setBtnActive] = useState("");
  
    const toggleActive = (e) => {
      setBtnActive((prev) => {
        return e.target.value;
      });
    };
  
    return (
      <div className="firstContainer">
         <textarea className="secondcon" type = "text"
         
          onChange ={(e)=>e.target.value} 
        />
      </div>
    );
  }
  export default SecondQuestion;