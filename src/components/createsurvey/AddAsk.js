import React from 'react';
import { Link} from "react-router-dom";
import './modal.css';
import Onepage from '../../pages/Onepage/Onepage'
import Card from '../../pages/Card/Card'
import { useSelector, useDispatch } from "react-redux/";
import { useState} from 'react'

import { increament, increament2, increament3} from "../../components/Slice/OnepageSlice";


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



    const selecttype = {
        onepage: "/Onepage",
        card: "/Card"
      };

  return (
    <div>

        <div className='typeCard'>
            <div>
            <input type = "number" min='0' onChange = {changeMult}/>객관식
            </div>
            <div>
            <input type = "number" min='0' onChange = {changeSub}/>주관식
            </div>
            <div><input type = "number" min='0' onChange = {changeLine}/>선형배율</div>
        
        </div>

        <div>

        <Link to={selecttype[pagetype]}>
        <button onClick={
            add}>만들기</button>
         </Link>
        

        </div>
    </div>
    );

};

export default AddAsk;
