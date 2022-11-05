import Form from 'react-bootstrap/Form';
import React, { useEffect,useState } from 'react';
import WithHeaderAndQuoteExample from '../../components/respond/WithHeaderAndQuoteExample';
import ShortAnswerResult from "../../components/Result/ShortAnswerResult";
import './RespondOnePage.css'
import FirstQuestion from "../../components/respond/FirstQuestion";
import SecondQuestion from "../../components/respond/SecondQuestion";
import LinearQuestion from "../../components/respond/LinearQuestion";
import CheckBoxQuestion from "../../components/respond/CheckBoxQuestion";


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
                <Form class="form">
                    <Form.Group className="mb-3" controlId="formGrouptitle">
                    <h3 class='RespondOnePageHeadTitle'> 제목 </h3>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupexplain">
                    <h5 class='RespondOnePageHeadOverview'> 설문 개요 </h5>
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