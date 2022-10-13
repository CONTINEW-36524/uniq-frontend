import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <Link to="/createSurvey">
        <button>Create Survey</button>
      </Link>
      <Link to="/respond">
        <button>Respond Page</button>
      </Link>
    </>
  );
}

export default Home;
