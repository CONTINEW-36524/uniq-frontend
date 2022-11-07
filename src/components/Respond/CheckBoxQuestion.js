import React, { useEffect, useState, useCallback } from 'react';
import "./Respond.css"

function CheckBoxQuestion() {
  let [datas, setDatas] = useState([
    {
      id:1,
      text: '1학년',
      checked: false,
    },
    {
      id:2,
      text: '2학년',
      checked: false,
    },
    {
      id:3,
      text: '3학년',
      checked: false,
    },
    {
      id:4,
      text: '4학년',
      checked: false,
    },
  ]);

  const onToggle = useCallback((id) => {
    setDatas((datas) =>
      datas.map((data) =>
        data.id === id ? { ...data, checked: !data.checked } : data,
      ),
    );
  }, []);      
  
    return (
      <div className="Qlayout">
        <h3>질문: ____ ?</h3>
        <div className="checkboxContainer">
          <ul className="ulBox">
            {datas.map((data) => (
              <ListItem
                data={data}
                key={data.id}
                onToggle={onToggle}
              />

            ))}
          </ul>
        </div>
      </div>
    );
  }

  function ListItem({data, onToggle}) {
    const { id, text, checked } = data;

    return (
      <li className="ListItem">

        <div onClick={() => onToggle(id)} >
          
          <p className="checkboxText"> {checked ? '☑' : '☐'} {text}</p>
          <br/>

        </div>
        
      </li>
    );
  }


export default CheckBoxQuestion;