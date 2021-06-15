import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
