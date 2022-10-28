import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Template from "./pages/Template/Template";
import Login from "./pages/Login";
import MySpace from "./pages/MySpace/MySpace";
import NotFound from "./pages/NotFound";
import Logo from "./assets/logo.png";
import CreateSurvey from "./pages/CreateSurvey";
import Option from "./pages/Option/Option";
import Onepage from "./pages/Onepage/Onepage";
import Respond from "./pages/Respond/RespondOnecard";
import KakaoLogin from './pages/KakaoLogin';
import Card from "./pages/Card/Card"
import Result from "./pages/Result/Result"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Container, Nav, Navbar, NavDropdown, Form, Col, Row} from 'react-bootstrap';

import { REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL} from './pages/KakaoLogin';


function App(props) {
  const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);




  return (
    <Router>
      <Navbar collapseOnSelect fixed="top" className="menu" bg="white">
        <Container>
          <Navbar.Brand href="/" className='Navbar-logo'></Navbar.Brand>
            {/* <Nav.Link className = "item" href="/about">소개</Nav.Link> */}
            <div className='item1'>
            <Nav.Link href="/template">템플릿</Nav.Link>
            </div>
            {/* <li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/>
          <li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/> */}
            <div className='item2'>
              <Nav.Link href="/myspace">나의공간</Nav.Link> 
            </div>
            <li/>
            <div className='item3'>
            <Nav.Link href={KAKAO_AUTH_URL}>로그인</Nav.Link>
            </div>
        </Container>
      </Navbar>
      
      {/* Spring boot React 연동 확인 테스트용 */}

      <main className='main'>
        {/* Switch has been replaced with Routes from v6 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/template" element={<Template />} />
          <Route path="/createSurvey" element={<CreateSurvey/>}/>
          <Route path="/respond" element={<Respond />}/>
          <Route path="/Onepage" element={<Onepage />}/>
          <Route path="/option" element={<Option/>}/>
          <Route path="/oauth/callback/kakao" />
          <Route path="/Card" element={<Card />} />
          <Route path="/Onepage" element={<Onepage />}/>
          <Route path="/oauth/callback/kakao" element={<KakaoLogin />}/>
          <Route path="/myspace" element={<MySpace />}/>
          <Route path="/result" element={<Result/>}/>

          <Route path="*" element={<NotFound />} />
          {/* 지정하지 않은 주소로 들어올 때는 NotFound가 뜬다. */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
