import { useSelector, useDispatch } from "react-redux/";

import { increament, changesurtitle,changesursubtitle} from "../../components/Slice/OnepageSlice";
import { useState} from 'react';
import React from "react";
import { NavLink } from 'react-router-dom';
import { FcList } from "react-icons/fc";
import './Onepage.css';
import '../../../src/App.css'
import { isDOMComponent } from "react-dom/test-utils";
import DropDown from "../../components/createsurvey/dropdown";
import {useDrag} from 'react-use-gesture';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Onepage = (props) =>{

    const survey = useSelector((state)=>state.onepage.survey);
    const data = useSelector((state)=>state.onepage.data);
    const count = useSelector((state)=>state.onepage.count);
    const dispatch = useDispatch();
    const [title, settitle] = useState('설문 제목');
    const [subtitle, setsubtitle] = useState('설문 개요');

    const [isSidebarOpen, closeSidebar] = useState(false);

    const [logoPos, setlogoPos] = useState({x:0, y:0});
    const bindLogoPos = useDrag(()=>{});
    const [active, setAtive] = useState("inactive");

    const toggleActive = (e) => {
        setAtive ((prev)=>{
            return e.target.value;
        })
    }
    const nextpage = () => {
       alert('Next Page')
    }
    const toggleSidebar = () =>{
      closeSidebar(isSidebarOpen => !isSidebarOpen)
    }

    return ( 

// <<<<<<< HEAD
//     <div className="container1">
//        <div className="craP">
//         <div id = "test"
//         value = {active}
//         className="title"
//         onclick = {toggleActive} >
      
//             <input class="title-header" type = "text" placeholder='설문 제목'
//                      value={survey.title}
//                      onChange ={(e)=>
//                         dispatch(changesurtitle(e.target.value))
                        
//                     } 
                     
//             />
      
//         <input  class="title-header" type = "text" placeholder='설문 개요'
//                  value={survey.subtitle}
//                  onChange ={(e)=>dispatch(changesursubtitle(e.target.value))} />
//         </div>
//         <ul className="firstlist">
//         { data.map((item,index)=>(
//                     <li> <DropDown id={item.id}/></li>    
//                   )

//              )
//              }
//         </ul>
            
//             <button class="btn1" onClick={()=>dispatch(increament())}>+</button>
//             <button className="w-btn-outline w-btn-yellow-outline" type="button" onClick={nextpage} >생성하기</button>
//             <p class="count">{count}</p>
//        </div>

// =======
        
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
                        <Form.Control size="lg" type="title" value={survey.title}
                     onChange ={(e)=>dispatch(changesurtitle(e.target.value))}placeholder="설문지 제목을 입력하세요." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupexplain">
                        <Form.Label>설문지 설명</Form.Label>

                        <Form.Control type="explain" placeholder="설문지 설명을 입력하세요." value={survey.subtitle} onChange ={(e)=>dispatch(changesursubtitle(e.target.value))} />
                    </Form.Group>
                </Form>

            </div>

            <div className="containerContent">
                { data.map((item,index)=>( 
                    <div className="fadein">
                    <DropDown id={item.id}/> 
                    </div>
                ))}
                <div className="containerFooter">
                    <button class="plusBtn" onClick={()=>dispatch(increament())}> + </button>
                    <button className="w-btn-outline w-btn-yellow-outline" type="button" onClick={nextpage} >생성하기</button>
                    <p class="count">- {count} -</p>
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
export default Onepage;