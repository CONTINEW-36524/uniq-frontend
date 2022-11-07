import { useSelector, useDispatch } from "react-redux/";

import { increament, changesurtitle,changesursubtitle, pluscardpage,minuscardpage} from "../../components/Slice/OnepageSlice";
import { useState} from 'react';
import React from "react";
import { NavLink } from 'react-router-dom';
import { FcList } from "react-icons/fc";
import '../CreateSurvey/OnePageCreate.css';
import '../../../src/App.css'
import './CardCreate.css'
import { isDOMComponent } from "react-dom/test-utils";
import DropDown from "../../components/Dropdown/Dropdown";
import {useDrag} from 'react-use-gesture';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const CardCreate = (props) =>{

    const survey = useSelector((state)=>state.onepage.survey);
    const data = useSelector((state)=>state.onepage.survey.data);
    const count = useSelector((state)=>state.onepage.count);
    const pagecount = useSelector((state)=>state.onepage.pagecount);
    const dispatch = useDispatch();

    const [isSidebarOpen, closeSidebar] = useState(false);

    // const [logoPos, setlogoPos] = useState({x:0, y:0});
    // const bindLogoPos = useDrag(()=>{});
    // const [active, setAtive] = useState("inactive");

    // const toggleActive = (e) => {
    //     setAtive ((prev)=>{
    //         return e.target.value;
    //     })
    // }

    const testAxios=() =>{
        
        axios.post('/api/create/survey',
        survey
            ).then(function (response) {
                console.log(response)
              })
          .catch(function(){
            console.log('실패함')
          })
          console.log(survey)
          


    }  


     const toggleSidebar = () =>{
      closeSidebar(isSidebarOpen => !isSidebarOpen)
     }

    return ( 
  



        <div className="container">
            <div className="containerHeader">
                {/* 설문 제목, 설문 개요 */}
                {/* <input class="title-header" type = "text"
                    value={survey.title}
                    onChange ={(e)=>changesurtitle(e.target.value)} />
                
                <input class="title-header" type = "text"
                    value={survey.subtitle}
                    onChange ={(e)=>changesursubtitle(e.target.value)} /> */}
                <Form class="form">
                    <Form.Group className="mb-3" controlId="formGrouptitle">
                        <Form.Label column="lg" lg={2}>설문지 제목</Form.Label>
                        <Form.Control size="lg" type="title" value={survey.maintitle}
                     onChange ={(e)=>dispatch(changesurtitle(e.target.value))}placeholder="설문지 제목을 입력하세요." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupexplain">
                        <Form.Label>설문지 설명</Form.Label>

                        <Form.Control type="explain" placeholder="설문지 설명을 입력하세요." value={survey.subtitle} onChange ={(e)=>dispatch(changesursubtitle(e.target.value))} />
                    </Form.Group>
                </Form>

            </div>
            <div className="containerContent">
                <div className="fadein" key={data[pagecount].did}>
                    <DropDown  id={data[pagecount].did}/>
                </div> 
       
                <div className="containerFooterCard">
                    <div class="Cardpage">
                        <button class="nextcard" onClick={()=>dispatch(minuscardpage())}>이전</button>
                        <p class="CardNum">- {pagecount+1}/{count} -</p>
                        <button class="nextcard" onClick={()=>dispatch(pluscardpage())}>다음</button>
                    </div>
                    <button className="w-btn-outline w-btn-yellow-outline" type="button" onClick={testAxios} >생성하기</button>   
                </div>
            </div>

            <section>
                <div className={`${isSidebarOpen ? 'show-sidebar' : 'l-navbar'}`}>
                    <nav class="sidenav">
                        <div>
                            <div class="nav__brand">
                                <FcList color="white" size="50" role="button" onClick={()=>toggleSidebar()}/>
                                <a class="nav__logo">커스터마이징</a>
                            </div>
                            <ul >
                                <li>서식 옵션</li>
                                <li>설정 옵션</li>
                                <li>공유 옵션</li>
                                <li>저장 옵션</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </div>

    );
}
export default CardCreate;