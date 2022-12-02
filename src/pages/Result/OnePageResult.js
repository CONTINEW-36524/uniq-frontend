import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Piechart from "../../components/Result/Piechart";
import Barchart from "../../components/Result/Barchart";
import ShortAnswerResult from "../../components/Result/ShortAnswerResult";
import LinearResult from "../../components/Result/LinearResult";
import Form from 'react-bootstrap/Form';
import axios from "axios";

import "./OnePageResult.css"

const OnePageResult = () => {
    const location = useLocation();
    const [onepR, setOnepR] = useState([]);

    useEffect(() => {
        axios.get('/respond-read-service/api/read/answer', {
            params: {
                url: location.pathname,
                type: 'onepage'
            }
        }
        ).then(function (response) {
            console.log(response.data)
            setOnepR(response.data)
            console.log(onepR)
            console.log('마운트');
        }).catch(function (error) {
            console.log("에러")
        });
    }, [])

    const QList = {
        results: [
            {QNum: 1, QType: 'Radio', question: "학년을 선택하세요."},
            {QNum: 2, QType: 'Checkbox', question: "좋아하는 음료를 골라볼까요?"},
            {QNum: 3, QType: 'ShortAnswer', question: "궁금한 점이 있다면 적어주세요 :)"},
            {QNUm: 4, QType: 'Linear', question: "선형배율 결과 화면"}
        ]
    }

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
            <div className="resultContainerContent-OnePage">

                {/* <h3 className="question">질문: _________ ?</h3>
                <div className="resultChat">
                    <h4 className='answer'>답변 결과: </h4>
                    <Barchart/> 
                    <Piechart/> 

                    <ShortAnswerResult/>
        
                </div> */}

                { 
                    QList.results.map((item) => { 
                        return (
                            <div>
                                <h3 className="questionOnePage">{item.question}</h3>
                                <div className="resultChatOnePage">
                                    <h4 className='answerOnePage'>답변 결과: </h4>
                                    {/* <Barchart/> */}
                                    {/* <Piechart/> */}
                                    {/* <ShortAnswerResult/> */}

                                    {{
                                        'Radio' : <Piechart/>,
                                        'Checkbox' : <Barchart/>,
                                        'ShortAnswer' : <ShortAnswerResult/>,
                                        'Linear': <LinearResult/>,
                                    }[item.QType]}
                                                            
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

        
    );
};


export default OnePageResult;