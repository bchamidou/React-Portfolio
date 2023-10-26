import React from 'react';

function Resume() {
  return (
      <section>
          <h1 style={{ backgroundColor: "lightblue" }}>Resume</h1>
          <hr />
          {/* <p>You can download my resume here:
              <a href={pdf}><button>Resume</button></a>
          </p> */}
          <h1 style={{ backgroundColor: "lightblue" }}>Education</h1>
          <hr />
          <h2>Connecticut University</h2>
          <h3>Full Stack Web Developer Boot Camp</h3>
          <h4>Remote</h4>
          <i style={{ borderstyle: "solid bold" }}>Mai 2023 - Novembre 2023</i>
          <hr />
          <h2>Technical Skills: React, HTML, CSS, JavaScript, jQuery, Node.js, MySQL, MangoDB</h2>
          <h2>Software/Applications: Visual Studio Code, GitHub, Slack, Heroku</h2>
      </section>
  );
};

export default Resume;