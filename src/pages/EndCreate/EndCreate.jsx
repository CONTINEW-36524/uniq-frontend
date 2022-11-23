import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import QRCODE from "react-qr-code";
import { useSelector, useDispatch } from "react-redux/";
import { getSuggestedQuery } from '@testing-library/react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './EndCreate.css'

function EndCreate(props) {
    const [QR, setQR] = useState(false);
    const [ip, setIp] = useState("");
    const survey = useSelector((state) => state.onepage.survey);

    const qrstat = () => {
        setQR(true);

        setIp("http://210.109.60.250"+survey.url);


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
            <h2>url: http://localhost:3000{survey.url} </h2>
            <button class="qrbtn" onClick={qrstat}>QR코드 생성</button>

            <Link to="/">
                <button className="qrbtn" onClick={qrout}>홈으로 이동</button>
            </Link>
            <div className="qrbox">
                {QR && <QRCODE value={ip} />}
            </div>
           
        </div>
    );
}

export default EndCreate;