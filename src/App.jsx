import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello!</h1>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
