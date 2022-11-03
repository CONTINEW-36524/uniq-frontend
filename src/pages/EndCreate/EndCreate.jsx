import './EndCreate.css'
import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import QRCODE from "react-qr-code";
import { getSuggestedQuery } from '@testing-library/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EndCreate(props) {
    const [QR, setQR] = useState(false);
    const [ip, setIp] = useState("");

    const qrstat = () => {
        setQR(true);
        setIp("http://localhost:3000/respond");
        
    }
    const qrout = () => {
        setQR(false);
        setIp("");
    }

    // const [value, onChange] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div class="ecwrapper">
            <h1 class="qrtitle">설문 생성 완료!</h1>
            <button class="qrbtn" onClick={qrstat}>QR코드 생성</button>
            <Link to="/">
                <button class="qrbtn" onClick={qrout}>홈으로 이동</button>
            </Link>
            <div className="qrbox">
                {QR && <QRCODE value={ip} />}
            </div>

            <div className='calendar'>
                <h4>설문 시작 날짜: </h4>
                {/* <Calendar onChange={onChange} value={value} /> */}
                <DatePicker selected={startDate} onChange={(date=Date) => setStartDate(date)} />
                {/* <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div> */}
                
            </div>

        </div>
    );
}

export default EndCreate;