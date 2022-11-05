import React, { useState } from 'react';
import Piechart from "../../components/Result/Piechart";
import Barchart from "../../components/Result/Barchart";
import ShortAnswerResult from "../../components/Result/ShortAnswerResult";
import Form from 'react-bootstrap/Form';

import "./CardResult.css"
import Button from '@mui/material/Button';


const CardResult = () => {

    // 문항이 5개라고 가정
    let QNum = 5
    let [nowQNum, changenowQNum] = useState(1)
    let progress = eval(100/QNum)
    console.log(progress)

    return (
        <div className='container'>
            <div className="resultContainerHeader">
                <Form class="form">
                <Form.Group className="mb-3" controlId="formGrouptitle">
                    <h3 class='respondHeadTitle'> 설문 제목 </h3>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupexplain">
                    <h5 class='respondHeadOverview'> 설문 개요 </h5>
                </Form.Group>
                </Form>
            </div>
            <div className="resultContainerContent">

                <h3 className="question">질문: _________ ?</h3>
                <div className="resultChat">
                    <h4 className='answer'>답변 결과: </h4>
                    {/* <Barchart/> */}
                    {/* <Piechart/> */}

                    <ShortAnswerResult/>
                    <div className="resultContainerFooter">
                    <button 
                        class="w-btn w-btn-blue prevBtn" 
                        type="button"
                        onClick={() => {
                            PrevPage(-1) 
                            changenowQNum(nowQNum-1)
                        }
                    }> 🡸 
                    </button>
                        <h4 className='PageNum'> {nowQNum} / {QNum}</h4>
                        
                    <button 
                        class="w-btn w-btn-blue nextBtn" 
                        type="button"
                        onClick={() => {
                            NextPage(1)
                            changenowQNum(nowQNum+1)
                        }
                    }> 🡺 
                    </button>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

function PrevPage(props){
    // if (props==0) {
    //     return(
    //         alert("첫 문항입니다.")
    //     );
    // } 
    // else {
    //     return(
    //         alert("이전 페이지로~")
    //     );
    // }
    console.log(props)
    return(
        alert("이전 페이지로~")
    );
}

function NextPage(props) {

    return(
        
        alert("다음페이지로~")
    );
}

export default CardResult;