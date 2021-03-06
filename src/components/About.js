import React from "react";

function About() {
  return (
    <div className="row">
      <div className="col-12">
        <h2>
          <strong className="text-color">Brett Freeman</strong>
        </h2>
      </div>
      <div className="col-12 my-2">
        <h4>
          Mesa, AZ <span className="left-space">(480) 322-7352 </span>{" "}
          <span className="left-space">brett.h.freeman@gmail.com </span>{" "}
        </h4>
      </div>
      <div className="col-12">
        <p>
          I am a fullstack developer with experience in JavaScript including
          Node.js and Express.js. I love the challenge that developing brings.
          Each new project brings growth and new skills. Outside of my
          professional life I enjoy spending time in the outdoors, reading,
          playing video games, and spending time with my pets.
        </p>
        <div>
        <h3>
          <strong className="text-color">Skills</strong>
        </h3>
          <p>
            HTML        CSS             JavaScript             Node.js             React.js             Express.js             Git             MySQL             MongoDB             REST/RESTful API
          </p>
        </div>
      </div>
      <div className="col-12">
        <a href="https://github.com/bhfreeman" 
        target="_blank" rel="noreferrer">
          <i className="fab fa-github-square fa-3x"></i>
        </a>
        <a
          className="left-space"
          href="https://www.linkedin.com/in/brett-freeman-41826b206/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
