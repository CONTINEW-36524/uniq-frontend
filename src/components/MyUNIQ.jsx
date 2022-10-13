import React from "react";
import { Outlet } from "react-router-dom"

function MyUNIQ(props) {
  return (
    <>
      <h1>Myspace</h1>
      <p>MyUNIQ</p>
      <Outlet/>
    </>
  );
}

export default MyUNIQ;