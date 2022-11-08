import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Template from "./pages/Template/Template";
import MySpace from "./pages/MySpace/MySpace";
import NotFound from "./pages/NotFound";
import Logo from "./assets/logo.png";

import OnePageCreate from "./pages/CreateSurvey/OnePageCreate";
import RespondCard from "./pages/Respond/RespondCard";
import KakaoLogin from "./pages/Login/KakaoLogin";
import CardCreate from "./pages/CreateSurvey/CardCreate"
import CardResult from "./pages/Result/CardResult"
import OnePageResult from "./pages/Result/OnePageResult"
import EndCreate from "./pages/EndCreate/EndCreate"
import RespondOnePage from "./pages/Respond/RespondOnePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Container, Nav, Navbar, NavDropdown, Form, Col, Row} from 'react-bootstrap';



function App(props) {
  const [name, setName] = useState("로그인")
  const [isLogin, setLogin] = useState(false)


  const logout = () =>{
    localStorage.removeItem("userName")
    localStorage.removeItem("token")
    setName("로그인")
    setLogin(false)
    
  }
  //로그인후 새로고침해야 "로그인" -> "안녕하세요~님"으로 변경됨 수정필요
  useEffect(()=>{
    if (localStorage.getItem('userName'))
    {
        setName("안녕하세요, "+localStorage.getItem('userName')+"님!")
        setLogin(true)
    }
  })


  return (
    <Router>
      <Navbar collapseOnSelect fixed="top" className="menu" bg="white">
        <Container>
          <Navbar.Brand href="/" className='Navbar-logo'></Navbar.Brand>
            {/* <Nav.Link className = "item" href="/about">소개</Nav.Link> */}
            <div className='item1'>
            <Nav.Link href="/template">템플릿</Nav.Link>
            </div>
              <div className='item2'>
              <Nav.Link href="/myspace">나의공간</Nav.Link> 
            </div>
            <li/>
            <div className='item3'>
            {
              isLogin? <a onClick={logout}>{name}</a> : <Nav.Link href={process.env.REACT_APP_KAKAO_AUTH_URL}>{name}</Nav.Link>
            }
            </div>
        </Container>
      </Navbar>
      
      {/* Spring boot React 연동 확인 테스트용 */}

      <main className='main'>
        {/* Switch has been replaced with Routes from v6 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/template" element={<Template />} />
          <Route path="/endcreate" element={<EndCreate/>}/>
          {/* <Route path="/respond/:respondId" element={<Respond />}/>
          <Route path="/respond" element={<Respond />}/> */}
          <Route path="/RespondCard" element={<RespondCard />}/>
          <Route path="/OnePageCreate" element={<OnePageCreate />}/>
          <Route path="/CardCreate" element={<CardCreate />} />
          <Route path="/oauth/callback/kakao" element={<KakaoLogin />}/>
          <Route path="/MySpace" element={<MySpace />}/>
          <Route path="/RespondOnePage" element={<RespondOnePage />}/>
          <Route path="/CardResult" element={<CardResult/>}/>
          <Route path="/OnePageResult" element={<OnePageResult/>}/>
          <Route path="*" element={<NotFound />} />
          {/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
