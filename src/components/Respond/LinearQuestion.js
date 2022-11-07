import React, { useEffect,useState } from 'react';
import "./Respond.css"

function LinearQuestion() {
  let data = [1, 2, 3, 4, 5];

  let [btnActive, setBtnActive] = useState("");

  const btnClick = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <div className="Qlayout">
      <h3>질문: ____?</h3>
      <div className="LinearContainer">
        <p className='leftText'>전혀 아니다</p>
        {data.map((item, idx) => {
          return (
            <div>
              
              <button
                value={idx}
                className={"btn" + (idx == btnActive ? "-active" : "")}
                onClick={btnClick}
              >
                {item}
              </button>
              
            </div>
          );
        })}
        <p className='rightText'>매우 그렇다</p>
      </div>
    </div>
  );
    }
  export default LinearQuestion;
  