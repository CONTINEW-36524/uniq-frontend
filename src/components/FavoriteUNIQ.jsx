import React from "react";
import { Outlet } from "react-router-dom"

function FavoriteUNIQ() {
  return (
    <>
      <h1>Myspace</h1>
      <p>FavoriteUNIQ</p>
      <Outlet/>
    </>
  );
}

export default FavoriteUNIQ;