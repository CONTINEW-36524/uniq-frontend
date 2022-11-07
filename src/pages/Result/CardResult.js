import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import Piechart from "../../components/Result/Piechart";
import Barchart from "../../components/Result/Barchart";
import ShortAnswerResult from "../../components/Result/ShortAnswerResult";
import Form from 'react-bootstrap/Form';
import "./CardResult.css"
import Button from '@mui/material/Button';

import { pluscardresultpage,minuscardresultpage} from "../../components/Slice/OnepageSlice";


const CardResult = () => {

    const QList = {
        results: [
            {QNum: 1, QType: 'Radio', question: "학년을 선택하세요."},
            {QNum: 2, QType: 'Checkbox', question: "좋아하는 음료를 골라볼까요?"},
            {QNum: 3, QType: 'ShortAnswer', question: "궁금한 점이 있다면 적어주세요 :)"},
        ]
    }
    const dispatch1 = useDispatch();

    let [nowQNum, changenowQNum] = useState(0)

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
                
                <h3 className="question">{QList.results[nowQNum].question}</h3>
                <div className="resultChat">
                    <h4 className='answer'>답변 결과: </h4>
                    {/* <Barchart/> */}
                    {/* <Piechart/> */}
                    {/* <ShortAnswerResult/> */}

                    {{
                        'Radio' : <Piechart/>,
                        'Checkbox' : <Barchart/>,
                        'ShortAnswer' : <ShortAnswerResult/>
                    }[QList.results[nowQNum].QType]}

                    <div className="resultContainerFooter">
                        <button 
                            class="w-btn w-btn-blue prevBtn" 
                            type="button"
                            onClick={() => {
                                // PrevPage(-1) 
                                dispatch1(minuscardresultpage())
                                changenowQNum(nowQNum-1)
                            }
                        }> 🡸 
                        </button>
                        <h4 className='PageNum'> {QList.results[nowQNum].QNum} / {QList.results.length}</h4>
                                            
                        <button 
                            class="w-btn w-btn-blue nextBtn" 
                            type="button"
                            onClick={() => {
                                // NextPage(1)
                                dispatch1(pluscardresultpage())
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