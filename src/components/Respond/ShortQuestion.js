import React, { useEffect,useState } from 'react';
import "./respond.css"

function SecondQuestion(props) {
  
    
    return (
   
      <div className="Qlayout">
        <h3>질문: ____ ?</h3>
        <textarea className="SecondRespond" 
          type = "text" 
          placeholder="답변을 입력해주세요."
        />
      </div>

    );
  }
  export default SecondQuestion;