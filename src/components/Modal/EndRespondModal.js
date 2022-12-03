import React from 'react';
import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { ko } from "date-fns/esm/locale";
import Button from 'react-bootstrap/Button';
import './Modal.css'
import { useSelector, useDispatch } from "react-redux/";
import axios from 'axios';


function EndRespondModal() {

    
    return (
        
        <div className="Modal-Dialog" >
            <h3 className="EndRespondText">설문에 참여해주셔서 감사합니다!</h3>
            <button className="EndRespondBtn"
                onClick={()=>window.location.replace("http://localhost:3000/")}
            > 처음으로 돌아가기 
            </button>
        </div>
    );
}

export default EndRespondModal;