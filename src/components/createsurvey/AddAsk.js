import React from 'react';
import { Link} from "react-router-dom";
import './modal.css';
import Onepage from '../../pages/Onepage/Onepage'
import Card from '../../pages/Card/Card'
import { useSelector, useDispatch } from "react-redux/";
import {selectOnepage, selectCard} from "../Slice/CreateSurveySlice"

const AddAsk = (props) => {

    const pagetype = useSelector((state)=>state.createSurvey.surveyType); 
    const dispatch = useDispatch();
    const type = ["단답형", "장문형", "객관식", "체크박스", "드롭다운", "선형배율"];

    const selecttype = {
        onepage: "/Onepage",
        card: "/Card"
      };

  return (
    <div>
        {type.map((item) =>
         (
                <div className='typeCard'>
                    {item}
                    <input type = "number" min='0'></input>
                </div>
        ))}
    
        <div>
        <Link to={selecttype[pagetype]}>
        <button>만들기</button>
         </Link>
        
        </div>
    </div>
    );

};

export default AddAsk;
