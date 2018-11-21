import React from "react";
import { Greeting } from "./greeting";
import { SocialLinks } from "./social-links";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Greeting />
        <SocialLinks />
      </div>
    );
  }
}
