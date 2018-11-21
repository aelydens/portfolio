import React from "react";
import ReactDOM from "react-dom";

import { Router } from "@reach/router";

import Work from "./work";
import About from "./about";
import Contact from "./contact";
import Navigation from "./navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <Navigation />

            <Router>
              <About path="/" />
              <Work path="/work" />
              <Contact path="/contact" />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
