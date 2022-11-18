import Form from 'react-bootstrap/Form';
import React, { useEffect,useState } from 'react';
import WithHeaderAndQuoteExample from '../../components/Respond/WithHeaderAndQuoteExample';
import ShortAnswerResult from "../../components/Result/ShortAnswerResult";
import './RespondOnePage.css'
import FirstQuestion from "../../components/Respond/RadioQuestion";
import SecondQuestion from "../../components/Respond/ShortQuestion";
import LinearQuestion from "../../components/Respond/LinearQuestion";
import CheckBoxQuestion from "../../components/Respond/CheckBoxQuestion";


function RespondOnePage(props) {

    let data = ['1학년', '2학년', '3힉년', '4힉년'];
  
    let [btnActive, setBtnActive] = useState("");
  
    const toggleActive = (e) => {
      setBtnActive((prev) => {
        return e.target.value;
      });
    };


    return (
    <>
        <div className="RespondOnePageContainer">
            <div className="RespondOnePageContainerHeader">
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formGrouptitle">
                    <h3 className='RespondOnePageHeadTitle'> 제목 </h3>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupexplain">
                    <h5 className='RespondOnePageHeadOverview'> 설문 개요 </h5>
                    </Form.Group>
                </Form>
            </div>

            <div className="RespondOnePageContainerContent">
                <FirstQuestion/>
                <SecondQuestion/>
                <LinearQuestion/>
                <CheckBoxQuestion/>



                <div className="RespondOnePageContainerFooter">
                    <button className="showResultBtn w-btn-outline2 w-btn-yellow-outline2" type="button"> 결과보기</button>
                </div>
            </div>

            
            
        </div>
    </>
    );
}


export default RespondOnePage;