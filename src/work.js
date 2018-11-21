import React from "react";

import hat from "./cowboyhat.png";

export default class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <h1 className="title">My Work</h1>
        <img src={hat} alt="hat" class="hat" />
        <div>wip, I promise.</div>
      </div>
    );
  }
}
