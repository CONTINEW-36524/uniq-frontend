import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { inputID, inputPW, loginClick, signupClick } from "../components/Slice/LoginSlice";


const Layout = styled.div`
margin-top: 10px;
padding: 20px;
`;

const Login = (props) => {
    const id = useSelector(state=>state.id);
    const pw = useSelector(state=>state.pw);
    const isClick = useSelector(state=>state.isClick);
    const dispatch = useDispatch();

    const handleOnID = (e) => {
      dispatch(inputID(e.target.value));
    }
    const handleOnPW = (e) => {
      dispatch(inputPW(e.target.value));
    }


    const handleOnLoginClick = (e) => {
        dispatch(loginClick());
    }
    const handleOnSignupClick = (e) => {
      dispatch(signupClick());
  }

    return (
        <Layout>
          <input type="text" value={id} onChange={handleOnID}/>
          <input type="text" value={pw} onChange={handleOnPW}/>
            <button onClick={handleOnLoginClick} value = "onClick">로그인</button>
            <button onClick={handleOnSignupClick} value = "onClick">회원가입</button>
            <br/>
            {/* {isClick && <label></label>} */}
            <img src='img/login.png' alt="login" />
        </Layout>
    );
}
export default Login;