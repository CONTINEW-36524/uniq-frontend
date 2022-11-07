import React from 'react';
import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { ko } from "date-fns/esm/locale";
import Button from 'react-bootstrap/Button';
import './Modal.css'


function EndCreateModal() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        // <div className="Modal-Dialog" >
        //     <Modal.Dialog>
        //         <Modal.Header>
        //         <h4 className="Modal-Title">설문 기간 설정</h4>
        //         <h5 className="close-h5">X</h5>
        //         </Modal.Header>
        
        //         <Modal.Body className='Modal-Body'>
        //             <div className='calendar'>
        //                 <h4>설문 시작 날짜: </h4>
        //                 <DatePicker 
        //                     selected={startDate} 
        //                     onChange={(date=Date) => setStartDate(date)}
        //                     locale={ko}                   // 한글로 변경
        //                     dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        //                     showPopperArrow={false}       // 화살표 변경
        //                     minDate={new Date()}          // 오늘 날짜 전은 선택 못하게 
        //                 />
        //             </div>

        //             <div className='calendar'>
        //                 <h4>설문 종료 날짜: </h4>
        //                 <DatePicker 
        //                     selected={endDate} 
        //                     onChange={(date=Date) => setEndDate(date)} 
        //                     locale={ko}                   // 한글로 변경
        //                     dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        //                     showPopperArrow={false}       // 화살표 변경
        //                     minDate={startDate}          // 오늘 날짜 전은 선택 못하게
        //                 />
        //             </div>
        //         </Modal.Body>
        
        //         <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save</Button>
        //         </Modal.Footer>
        //     </Modal.Dialog>
        // </div>

        <div className="Modal-Dialog" >
            <div className='calendar'>
                <h4>설문 시작 날짜: </h4>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date=Date) => setStartDate(date)}
                    locale={ko}                   // 한글로 변경
                    dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                    showPopperArrow={false}       // 화살표 변경
                    minDate={new Date()}          // 오늘 날짜 전은 선택 못하게 
                />
                
            </div>
            
            <div className='calendar'>
                <h4>설문 종료 날짜: </h4>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date=Date) => setEndDate(date)} 
                    locale={ko}                   // 한글로 변경
                    dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                    showPopperArrow={false}       // 화살표 변경
                    minDate={startDate}          // 오늘 날짜 전은 선택 못하게
                />
            </div> <br/>

            <Link to="/endcreate" className="endcreateLinkTag">
                <Button className="ModalSaveBtn" variant="primary">Save</Button>
            </Link>
        </div>
    );
}

export default EndCreateModal;