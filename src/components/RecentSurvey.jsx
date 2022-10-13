import React from "react";
import { Outlet } from "react-router-dom"

function RecentSurvey(props) {
  return (
    <>
      <h1>Myspace</h1>
      <p>RecentSurvey</p>
      <Outlet/>
    </>
  );
}

export default RecentSurvey;