import React from 'react';
import { Link} from "react-router-dom";
import './Modal.css';
import { useSelector, useDispatch } from "react-redux/";
import { useState} from 'react'

import { increament, increament2, increament3, deleteinit} from "../../Slice/OnepageSlice";


const AddAsk = (props) => {
    const [mult, setMult] = useState(0)
    const [sub, setSub] = useState(0)
    const [linear, setLinear] = useState(0)

    const pagetype = useSelector((state)=>state.createSurvey.surveyType); 
    const dispatch = useDispatch();

    const changeMult = (e) =>{
        setMult(e.target.value)
        console.log(mult)
    }
    const changeSub = (e) =>{
        setSub(e.target.value)
    }
    const changeLine = (e) =>{
        setLinear(e.target.value)
    }
    const add  = () => {
    if (mult < 2)
    {
        dispatch(deleteinit(mult))
        
    for (let i = 0; i <sub; i++) {
        dispatch(increament2())
      }
    for (let i = 0; i <linear; i++) {
        dispatch(increament3())
      }
    }
    else 
    {
        for (let i = 0; i <mult-2; i++) {
            dispatch(increament())
          }
        for (let i = 0; i <sub; i++) {
            dispatch(increament2())
          }
        for (let i = 0; i <linear; i++) {
            dispatch(increament3())
          }
        }
    }
    


    const selecttype = {
        onepage: "/OnePageCreate",
        card: "/CardCreate"
      };

  return (
    <div className='typecardcontainer'>

        <div className='numq'>
            <div className='QType'>
              <p className="qType">객관식 :</p>
              <input className='typecarddiv' id='gackguan' type = "number" min='0' value={mult} onChange = {changeMult}/>
            </div>
            <div className='QType'>
              <p className="qType">주관식 : </p>
              <input className='typecarddiv' type = "number" min='0' value={sub} onChange = {changeSub}/>
            </div>
            <div className='QType'>
              <p className="qType">선형배율 : </p>
              <input className='typecarddiv' id='sunhyung' type = "number" min='0' value={linear} onChange = {changeLine}/>
            </div>
        </div>

        <div className='popupmakebtn'>
          <Link to={selecttype[pagetype]}>
            <button className='makeBtn' onClick={add}>만들기</button>
          </Link>
          <Link to={selecttype[pagetype]}>
            {/* <button  onClick={add}>만들기</button> */}
            <button className='standBtn'>기본양식으로 만들기</button>
          </Link>

        </div>

    </div>
    );

};

export default AddAsk;
