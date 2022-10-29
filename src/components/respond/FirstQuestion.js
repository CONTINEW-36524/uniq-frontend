import React, { useEffect,useState } from 'react';

function FirstQuestion(props) {
    let data = ['1학년', '2학년', '3힉년', '4힉년'];
  
    let [btnActive, setBtnActive] = useState("");
  
    const toggleActive = (e) => {
      setBtnActive((prev) => {
        return e.target.value;
      });
    };
  
    return (
      <div className="firstContainer">
        {props.data.map((item, idx) => {
          return (
            <>
            <div className="firstDiv">
              <button
                value={idx}
                className={"firstBtn" + (idx == btnActive ? " active" : "")}
                onClick={toggleActive}
              >
                ☐
              </button>
              <p className="bogiPTag">{item.con}</p>
            </div>
            </>
          );
        })}
      </div>
    );
  }
  export default FirstQuestion;