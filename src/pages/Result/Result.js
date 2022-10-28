import React, { useState } from 'react';
import Piechart from "../../components/Result/Piechart";
import Barchart from "../../components/Result/Barchart";
import Progress from "../../components/Result/Progress";
import Form from 'react-bootstrap/Form';
import data from '../Respond/respondData';
import "./result.css"
import Button from '@mui/material/Button';
import styled from 'styled-components';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const prevBtn = styled(Button)`
    variant: contained; 
    size: large;
    border: 0;
    border-radius: 3px;
    margin-right:100px;
    padding: 20px;
`

const Result = () => {
    let [datas] = useState(data)

    return (
        <div className='container'>
            <div className="resultContainerHeader">
                <Form class="form">
                <Form.Group className="mb-3" controlId="formGrouptitle">
                    <h3 class='respondHeadTitle'> {datas[0].title} </h3>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupexplain">
                    <h5 class='respondHeadOverview'> {datas[0].overview} </h5>
                </Form.Group>
                </Form>
            </div>
            <div className="resultContainerContent">

                <h3 className="question">질문: _________ ?</h3>
                <div className="resultChat">
                    <h4 className='answer'>답변 결과: </h4>
                    <Barchart/>
                    {/* <Piechart/> */}
                    {/* 원페이지 결과 볼때 한 질문씩 보니까 프로그레스바 사용*/}
                    {/* <Progress/> */}
                </div>

                <div className="resultContainerFooter">
                    <button class="w-btn w-btn-blue prevBtn" type="button"> 🡸 </button>
                    <Progress />
                    <button class="w-btn w-btn-blue nextBtn" type="button"> 🡺 </button>
                </div>
            </div>
        </div>

        
    );
};

export default Result;