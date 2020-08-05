import React from "react";

function Work() {
  return (
    <div id="work">
      <h1 className="lg-heading work">
        Current<span className="text-secondary"> Projects</span>
      </h1>
      <div className="projects">
        <div className="project boxes">
          <div className="dictionary-app">
            <h5 className="text-secondary">Google Dictionary App</h5>
            <a
              href="https://codepen.io/inlikecoolhand/pen/NWKjYGQ"
              blank="_target"
              rel="noopener noreferrer"
            >
              <img
                src="images/dictionary_cover.jpg"
                alt="dictionary cover"
              ></img>
            </a>
          </div>
        </div>
        <div className="project boxes">
          <div className="calendar-app">
            <h5 className="text-secondary">iOS Calendar App</h5>
            <a
              href="https://codepen.io/inlikecoolhand/pen/PMOzjZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/ios_calendar.jpg" alt="calendar cover"></img>
            </a>
          </div>
        </div>
        <div className="project boxes">
          <div className="notes-app">
            <h5 className="text-secondary">Notes App</h5>
            <a
              href="https://github.com/lflint07/on_task_react"
              target="_target"
              rel="noopener noreferrer"
            >
              <img src="images/notes_app.jpg" alt="notes cover"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
