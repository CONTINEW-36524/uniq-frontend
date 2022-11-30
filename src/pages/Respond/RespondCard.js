import Form from 'react-bootstrap/Form';
import React, { useEffect, useState, useParams } from 'react';
import { useSelector, useDispatch } from "react-redux/";
import CardQuestions from '../../components/Respond/CardQuestions';
import "./RespondCard.css"
import {savesurvey, postrespond} from "../../Slice/RespondSlice";
import RadioQuestion from '..//../components/Respond//RadioQuestion';
import CheckBoxQuestion from '..//../components/Respond/CheckBoxQuestion';
import ShortQuestion from '..//../components/Respond//ShortQuestion';
import LinearQuestion from '..//../components/Respond//LinearQuestion';
import { plusrespondcardpage, minusrespondcardpage} from "../../Slice/RespondSlice";

function RespondCard(props) {


  const dispatch = useDispatch();
  const savesurveyid =(e) => { 
    dispatch(savesurvey(Object.entries(props.responddata)[0][1][0].surveyid));
    dispatch(postrespond());
  }
  console.log(Object.entries(props.responddata).length);

  const count = Object.entries(props.responddata).length;

  

  let [nowRespondQNum, changenowRespondQNum] = useState(0);
  
  
  if(Object.entries(props.responddata).length){
    return (
      <>
        <div className="RespondCardContainer">
          <div className="RespondCardContainerHeader">
            <Form class="form">
              <Form.Group className="mb-3" controlId="formGrouptitle">
                <h3 class='RespondCardHeadTitle'> {Object.entries(props.responddata)[0][1][0].maintitle} </h3>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupexplain">
                <h5 class='RespondCardHeadOverview'> {Object.entries(props.responddata)[0][1][0].subtitle} </h5>
              </Form.Group>
            </Form>
          </div>
        
          <div className="RespondCardContainerContent">
            {/* { <CardQuestions responddata={Object.entries(props.responddata)} /> } */}

            {{
              '객관식' : <RadioQuestion data={Object.entries(props.responddata)[nowRespondQNum][1]}/>,
              '체크박스' : <CheckBoxQuestion />,
              '주관식' : <ShortQuestion data={Object.entries(props.responddata)[nowRespondQNum][1]}/>,
              '선형배율':<LinearQuestion />,
            }[Object.entries(props.responddata)[nowRespondQNum][1][0].type]}


            <div className="RespondCardContainerFooter">
              <div className="RespondCardPage">
                <button className="RespondCardNextBtn" 
                  onClick={() => {
                    //PrevPage(-1)
                    changenowRespondQNum(nowRespondQNum-1)
                  }}>
                  이전
                </button>
                <p className="RespondCardNum">- {nowRespondQNum+1}/{count} -</p>
                <button className="RespondCardNextBtn" 
                  onClick={() => {
                    //NextPage(1)
                    changenowRespondQNum(nowRespondQNum+1)
                  }}>
                  다음
                </button>
              </div>
              <button className="w-btn-outline2 w-btn-yellow-outline2 RespondCardBtn" type="button" onClick={savesurveyid}> 제출하기 </button>
            </div>
          </div>
        </div>
      </> 
    );
  }

}

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

export default RespondCard;