import React from "react";

function Work() {
  return (
    <div id="work">
      <div className="projects">
        <div className="heading-projects">
          <h1 className="lg-heading work">
            Current<span className="text-secondary"> Projects</span>
          </h1>
        </div>
        <div className="project-container">
          <div className="project boxes">
            <div className="dictionary-app">
              <div className="project-image">
                <a
                  href="https://codepen.io/inlikecoolhand/pen/NWKjYGQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-secondary">Google Dictionary App</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="project boxes">
            <div className="calendar-app">
              <a
                href="https://codepen.io/inlikecoolhand/pen/PMOzjZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-secondary">iOS Calendar App</h3>
              </a>
            </div>
          </div>
          <div className="project boxes">
            <div className="temperature-app">
              <div className="project-image">
                <a
                  href="https://temperature-control-bay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-secondary">Temperature Control App</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
