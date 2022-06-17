import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "../pages";

console.log("shared/App");
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path=":name" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
