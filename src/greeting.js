import React from "react";
import cactus from "./cactus.png";

export const Greeting = () => {
  return (
    <div className="greeting">
      <p className="title">
        Hi, I'm Annie.
        <img src={cactus} className="cactus" alt="cactus" />
      </p>
      <p>
        I write code at
        <a href="https://thoughtbot.com/" title="thoughtbot" className="link">
          thoughtbot
        </a>{" "}
        and make art in Austin, TX.
      </p>
      <p>
        I previously worked at
        <a href="https://www.techstars.com/" title="Techstars" className="link">
          Techstars
        </a>
        ,
        <a href="https://www.kiva.org/" title="Kiva" className="link">
          Kiva
        </a>
        , and TechSoup.
      </p>
    </div>
  );
};
