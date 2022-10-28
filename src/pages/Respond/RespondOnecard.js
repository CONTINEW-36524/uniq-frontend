import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import data from './respondData';
import "./respondOnecard.css"
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux/";
import DropDown from "../../components/createsurvey/dropdown";


function RespondOnecard() {
  let [datas] = useState(data)
  const survey = useSelector((state)=>state.onepage.survey);
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.onepage.count);

  return (
    <>
        {/* <div class='respondContainer'>
            <WithHeaderAndQuoteExample/>
        </div> */}

        <div className="container">
          <div className="containerHeader">
            <Form class="form">
              <Form.Group className="mb-3" controlId="formGrouptitle">
                <h3 class='respondHeadTitle'> {datas[0].title} </h3>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupexplain">
                <h5 class='respondHeadOverview'> {datas[0].overview} </h5>
              </Form.Group>
            </Form>
            
          </div>

          <div className="respondContainerContent">
            {/* { datas.map((item,index)=>( 
              <div className="fadein">
                <DropDown id={item.id}/> 
              </div>
            ))} */}
            <WithHeaderAndQuoteExample/>
            <div className="respondContainerFooter">
              <button className="w-btn-outline2 w-btn-yellow-outline2" type="button"> 제출하기</button>
            </div>
          </div>
        </div>
    </> 
  );
}


function WithHeaderAndQuoteExample() {
    let [datas] = useState(data)

    return (
      datas.map((datas => (
        <Card className="text-center w-100" >
          <div>
            <Card.Header>Question Number {datas.id}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  질문: {datas.question}
                  {' '}
                </p>
                <footer className="blockquote-footer">
                  type: {datas.type} 
                  {/* (질문 타입에 따라 답 적는칸 다르게 구현해야함) */}
                </footer>
              </blockquote>
            </Card.Body>
          </div>
        </Card>
      )))
        
    );
}

export default RespondOnecard;
