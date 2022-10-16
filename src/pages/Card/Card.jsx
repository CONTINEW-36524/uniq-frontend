import { useSelector, useDispatch } from "react-redux/";

import { increament, changesurtitle,changesursubtitle, pluscardpage,minuscardpage} from "../../components/Slice/OnepageSlice";
import { useState} from 'react';
import React from "react";
import { NavLink } from 'react-router-dom';
import { FcList } from "react-icons/fc";
import '../Onepage/Onepage.css';
import '../../../src/App.css'
import { isDOMComponent } from "react-dom/test-utils";
import DropDown from "../../components/createsurvey/dropdown";
import {useDrag} from 'react-use-gesture';

const Onepage = (props) =>{

    const survey = useSelector((state)=>state.onepage.survey);
    const data = useSelector((state)=>state.onepage.data);
    const count = useSelector((state)=>state.onepage.count);
    const pagecount = useSelector((state)=>state.onepage.pagecount);
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
    <div className="container1">
       <div className="craP">
        <div id = "test"
        value = {active}
        className="title"
        onclick = {toggleActive} >
      
            <input class="title-header" type = "text" placeholder='설문 제목'
                     value={survey.title}
                     onChange ={(e)=>changesurtitle(e.target.value)} 
                     
            />
      
        <input  class="title-header" type = "text" placeholder='설문 개요'
                 value={survey.subtitle}
                 onChange ={(e)=>changesursubtitle(e.target.value)} />
        </div>
        
                    {pagecount+1}
                    <DropDown id={data[pagecount].id}/>
                  
       
            <button class="btn1" onClick={()=>dispatch(minuscardpage())}>이전</button>
            <button class="btn1" onClick={()=>dispatch(pluscardpage())}>다음</button>
            <button className="w-btn-outline w-btn-yellow-outline" type="button" onClick={nextpage} >생성하기</button>
            <p class="count">{count}</p>
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