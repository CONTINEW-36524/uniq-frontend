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
// import { TextField, FormControl } from "@material-ui/core";


const Onepage = (props) =>{
    const surId= useSelector((state)=>state.onepage.id);
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
       alert('설문이 생성되었습니다!\n'+"http://localhost:3000/"+surId)
    }
    const toggleSidebar = () =>{
      closeSidebar(isSidebarOpen => !isSidebarOpen)
    }

    return ( 

        
        <div className="container">
            <div className="containerHeader">
                <Form class="form">
                    <Form.Group className="mb-3" controlId="formGrouptitle">
                        <Form.Label column="lg" lg={2}>설문지 제목</Form.Label>
                        <Form.Control size="lg" type="title" value={survey.title} multiline rows={3}
                            onChange ={(e)=>dispatch(changesurtitle(e.target.value))}placeholder="설문지 제목을 입력하세요." />
                        {/* <FormControl fullWidth sx={{ m: 1 }}> 
                            <TextField
                                label="내용"
                                multiline rows={3}
                                placeholder="설문지 설명을 입력하세요."
                            
                             />
                        </FormControl> */}
                            
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
                    <button className="w-btn-outline2 w-btn-yellow-outline2" type="button" onClick={nextpage} >생성하기</button>
                    <p class="count">- {count} -</p>
                </div>
            </div>
           
            <section>
                <div className={`${isSidebarOpen ? 'show-sidebar' : 'l-navbar'}`}>
                    <nav class="sidenav">
                        <div>
                            <div class="nav__brand">
                                <FcList color="white" size="50" role="button" onClick={()=>toggleSidebar()}/>
                                {/* <a class="nav__logo">커스터마이징</a> */}
                            </div>
                            {/* 보류상태입니당..!  */}
                            <div className='options'>
                                <p classNmae='option1'>서식옵션</p>
                                <div className='optionUItag'>
                                    <ui>
                                        <li>
                                            크기 <span className='option1Btn' > ▼ </span> 
                                        </li> 
                                        <li>
                                            배경색 <span className='option1Btn' > ▼ </span>
                                        </li>
                                    </ui>
                                </div>
                                
                            </div>  
                            
                        </div>
                    </nav>
                </div>
            </section>
        </div>
     
     
    );
}
export default Onepage;