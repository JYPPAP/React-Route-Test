import React from "react";
import { Link, Outlet } from "react-router-dom";

console.log("Home");
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to={`/About`} key={1} children={<p>Go About</p>}/>
      <Link to={`/About/Second`} key={2} children={<p>Go About2</p>}/>
      <Outlet children="Outlet" />
    </div>
  );
};

export default Home;
