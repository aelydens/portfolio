import React from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";

import Work from "./work";
import About from "./about";
import Contact from "./contact";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <div className="navigation">
              <ul>
                <li className="active">
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

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
