import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AIML Engineer",
          "GenAI Engineer",
          "Backend Engineer",
          "Full Stack AI Developer",
          "Data Science & Analytics",
          "OPEN TO WORK",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
