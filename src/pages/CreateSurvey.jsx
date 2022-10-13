import React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import bg_createSurvey from "../assets/createSurvey.png"

function CreateSurvey(props) {

  const alert_msg = () => {
    window.alert('템플릿 커스터마이징 공간입니다.');
  }
  return (
    <>

      <h1>CreateSurvey</h1>
      <p>It's yourr space</p>
      <Link to="/option">
        <button class="btn" onClick={alert_msg}>Customize Template</button>
      </Link>
      <br/>
      <Link to="/Onepage">
        <button>One page</button>
      </Link>
      <img class="bg_image" src={bg_createSurvey} alt="background" />
    </>
  );
}

export default CreateSurvey;
