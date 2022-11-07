import React, { useEffect, useState, useCallback } from 'react';
import "./Respond.css"



function FirstQuestion() {
  let data = ['1학년', '2학년', '3학년', '4학년'];

  let [btnActive, setBtnActive] = useState("");

  const btnClick = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

    return (
      <div className="Qlayout">
        <h3>질문: ____ ?</h3>

        <div className="radioContainer">
          {data.map((item, idx) => {
            return (
              <div>
                <button
                  value={idx}
                  className={"radioBtn" + (idx == btnActive ? "-active" : "")}
                  onClick={btnClick}
                >
                o {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }



  export default FirstQuestion;