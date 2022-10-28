import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import data from './respondData';
import { useLocation } from 'react-router-dom';
import "./respondOnecard.css"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux/";
import DropDown from "../../components/createsurvey/dropdown";


function RespondOnecard() {
  let [datas] = useState(data)
  const survey = useSelector((state)=>state.onepage.survey);
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.onepage.count);
  const location=useLocation();
  const [responddata, setresponddata] = useState();
  const [question, setquestion] = useState();

  // 

//   function TestAxios() {
//      axios.get("/api/respond/survey")
//   .then(function (response) {
//         console.log(response); 
//   }).catch(function (error) {
//       // 오류발생시 실행
//   }).then(function() {
//       // 항상 실행
//   });
//   console.log(useLocation())
// }

useEffect(()=>{
  axios.get("/api/respond/survey",{params:{url: location.pathname}})
  .then(function (response) {
    //2. Parser
    setresponddata(response.data);
    // setresponddata(JSON.parse(response.data[0].datalist));
        console.log(JSON.parse(responddata[0].datalist)[0].type); 
        console.log(responddata); 
  }).catch(function (error) {
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });
}, [])
  return (
    <>
      
        {/* <div class='respondContainer'>
            <WithHeaderAndQuoteExample/>
        </div> */}

        <div className="container">
          <div className="containerHeader">
            <Form class="form">
              <Form.Group className="mb-3" controlId="formGrouptitle">
                <h3 class='respondHeadTitle'> {responddata[0].maintitle} </h3>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupexplain">
                <h5 class='respondHeadOverview'> {responddata[0].subtitle} </h5>
              </Form.Group>
            </Form>
            
          </div>

          <div className="respondContainerContent">
            {/* { datas.map((item,index)=>( 
              <div className="fadein">
                <DropDown id={item.id}/> 
              </div>
            ))} */}
            <WithHeaderAndQuoteExample responddata={responddata} />
            <div className="respondContainerFooter">
              <button className="w-btn-outline2 w-btn-yellow-outline2" type="button" > 제출하기</button>
            </div>
          </div>
        </div>
    </> 
  );
}


function WithHeaderAndQuoteExample(props) {
    const aa=JSON.parse(props.responddata[0].datalist)

    return (
      aa.map(((datas,idx) => (
        <Card className="text-center w-100" >
          <div>
            <Card.Header>Question Number {idx+1}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  질문: {datas.title}
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
