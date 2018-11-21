import React from "react";

import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://twitter.com/aelydens">
        <img src={twitter} alt="twitter profile" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/aelydens/">
        <img src={linkedin} alt="linkedin profile" className="social-icon" />
      </a>
      <a href="https://github.com/aelydens">
        <img src={github} alt="github profile" className="social-icon" />
      </a>
    </div>
  );
};
