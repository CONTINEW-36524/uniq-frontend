import React, { useEffect,useState } from 'react';

function LinearQuestion() {
  let data = [1, 2, 3, 4];

  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <div className="LinearContainer">

      <p className='leftText'>전혀 아니다</p>
      {data.map((item, idx) => {
        return (
          <>
          <div>
            
            <button
              value={idx}
              className={"btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
            
          </div>
          </>
        );
      })}
      <p className='rightText'>매우 그렇다</p>
    </div>
  );
    }
  export default LinearQuestion;
  