import React from "react";
import About from "./About";
import Statement from "./Statement";
import Projects from "./Projects";
import Header from "../../components/Header";
import Contact from "./Contact";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Projects />
      <Statement />
      <Contact />
    </React.Fragment>
  );
}

export default Home;
