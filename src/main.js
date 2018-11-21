import React from "react";
import ReactDOM from "react-dom";
import { SocialLinks } from "./social-links";
import { Greeting } from "./greeting";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <div className="navigation">
              <ul>
                <li className="active">About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>

            <Greeting />
            <SocialLinks />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
