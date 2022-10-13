import React, {useState} from "react";
import my_img from "../assets/MyUNIQ.png";
import favorite_img from "../assets/FavoriteUNIQ.png";
import recent_img from "../assets/RecentSurvey.png";
import styled from "styled-components";
// import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import App from "../App"

// const Wrapper = styled.div`
// padding: 16px;
// width: 100%;
// text-align : center;
// align-items: center;
// justify-content: center;
// `
const StyledImg = styled.img`
width:500px;
height:1000px;
`
const StyledButton = styled.button`
margin-left:15px;
width:150px;
height:100%
`
function MySpace(props) {
  const [imgsrc, setImgsrc] = useState(my_img);

  const MyUNIQ = () => {
    alert("나의 UNIQ");
    setImgsrc(my_img);
  };
  const FavoriteUNIQ = () => {
    alert('UNIQ 찜 목록');
    setImgsrc(favorite_img);
  };
  const RecentSurvey = () => {
    alert("최근 설문지");
    setImgsrc(recent_img);
  };

  return (
    <>
      {/* <Link to="MyUNIQ">
        <button class="btn">나의 UNIQ</button>
      </Link>
      <Link to="FavoriteUNIQ">
        <button class="btn">UNIQ 찜 목록</button>
      </Link>
      <Link to="RecentSurvey">
        <button class="btn">최근 설문지</button>
      </Link> */}
      <StyledButton class="btn" onClick={MyUNIQ}>나의 UNIQ</StyledButton>
      <StyledButton class="btn" onClick={FavoriteUNIQ}>UNIQ 찜 목록</StyledButton>
      <StyledButton class="btn" onClick={RecentSurvey}>최근 설문지</StyledButton>
      <hr />
      <StyledImg src={imgsrc} alt="myspace"></StyledImg>

    </>
  );
}

export default MySpace;
