import './EndCreate.css'
import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import QRCODE from "react-qr-code";
import { getSuggestedQuery } from '@testing-library/react';

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
        </div>
    );
}

export default EndCreate;