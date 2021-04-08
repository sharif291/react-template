import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";

function Section() {
  return (
    <Fragment>
      
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/projects" component={Projects} exact></Route>
      
    </Fragment>
  );
}

export default Section;
