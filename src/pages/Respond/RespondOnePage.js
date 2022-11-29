import Form from 'react-bootstrap/Form';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import OnePageQuestions from '../../components/Respond/OnePageQuestions';
import './RespondOnePage.css'
import {savesurvey, postrespond} from "../../Slice/RespondSlice";

function RespondOnePage(props) {

    const dispatch = useDispatch();
    const savesurveyid =(e) => {
        // console.log(e.target.value)
        dispatch(savesurvey(Object.entries(props.responddata)[0][1][0].surveyid));
        dispatch(postrespond());
    }
    console.log(Object.entries(props.responddata).length)

    if(Object.entries(props.responddata).length){
        return (
        <>
          <div className="RespondOnePageContainer">
            <div className="RespondOnePageContainerHeader">
              <Form class="form">
                <Form.Group className="mb-3" controlId="formGrouptitle">
                  <h3 class='RespondOnePageHeadTitle'> {Object.entries(props.responddata)[0][1][0].maintitle} </h3>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupexplain">
                  <h5 class='RespondOnePageHeadOverview'> {Object.entries(props.responddata)[0][1][0].subtitle} </h5>
                </Form.Group>
              </Form>
            </div>
      
            <div className="RespondOnePageContainerContent">
              { <OnePageQuestions responddata={Object.entries(props.responddata)} /> }
                  
              <div className="RespondOnePageContainerFooter">
                <button className="w-btn-outline2 w-btn-yellow-outline2 RespondOnePageBtn" type="button" onClick={savesurveyid}> 제출하기 </button>
              </div>
            </div>
          </div>
        </> 
        );
    }
}


export default RespondOnePage;