import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const About = () => {
  let params = useParams();
  return (
    <div>
      <h2>About</h2>
      <Link to={`/`} key={3} children="Go Home"/>
      <p>{params.name}</p>
      <Outlet />
    </div>
  );
};

export default About;
