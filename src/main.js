import React from "react";
import ReactDOM from "react-dom";

import cactus from "./cactus.png";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container flexCenter fullHeight">
          <div className="main">
            <div className="navigation">
              <ul>
                <li className="active">About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="greeting">
              <p className="title">
                Hi, I'm Annie.
                <img src={cactus} className="cactus" alt="cactus" />
              </p>
              <p>
                I write code at
                <a href="https://thoughtbot.com/" className="link">
                  thoughtbot
                </a>{" "}
                in Austin, TX.
              </p>
              <p>
                I previously worked at
                <a href="https://www.techstars.com/" className="link">
                  Techstars
                </a>
                ,
                <a href="https://www.kiva.org/" className="link">
                  Kiva
                </a>
                , and TechSoup.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
