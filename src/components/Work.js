import React from "react";

function Work() {
  return (
    <div id="work">
        <h1 className="lg-heading work">
          Current<span className="text-secondary"> Projects</span>
        </h1>
        <h2 className="sm-heading">Check out a few of my projects</h2>
        <div className="projects">
          <div className="project boxes">
            <div className="dictionary-app">
              <span className="text-secondary">Google Dictionary App</span>
              <img src="images/dictionary_cover.jpg" alt="dictionary cover"></img>
            </div>
            <div className="iOS Calendar App">
              <span className="text-secondary">iOS Calendar App</span>
              <img src="images/ios_calendar.jpg" alt="dictionary cover"></img>
            </div>
            <div>
              <span className="text-secondary">Google Dictionary App</span>
              <img src="images/notes_app.jpg" alt="dictionary cover"></img>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Work;
