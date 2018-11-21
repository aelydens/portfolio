import React from "react";

import { SocialLinks } from "./social-links";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="title">Contact Me</h1>
        <SocialLinks />
      </div>
    );
  }
}
