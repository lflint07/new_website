import React from 'react'

function Work() {
    return(
        <div>
            <main id="work">
                <h1 className="lg-heading">My<span className="text-secondary"> Work</span></h1>
                <h2 className="sm-heading">Check out a few of my projects</h2>
                <div className="projects">
                   <div className ="item dictionary">
                       <a href="https://codepen.io/inlikecoolhand/pen/NWKjYGQ" target="_blank"  rel="noopener noreferrer" className = "project-cover">
                           <img src="images/dictionary-cover.jpg" alt="dictionary app"></img>
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Google Dictionary App
                       </a>
                       <a href="https://codepen.io/inlikecoolhand/pen/NWKjYGQ" target="_blank" rel="noopener noreferrer" className="button-dark">
                           <i className="fab fa-github"></i>CodePen
                       </a>
                   </div>
                   <div className ="item calendar">
                       <a href="https://codepen.io/inlikecoolhand/pen/PMOzjZ" target="_blank" rel="noopener noreferrer" className="project-cover">
                           <img src="images/ios_calendar.jpg" alt="calendar app"></img>
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>iOS Calendar App
                       </a>
                       <a href="https://codepen.io/inlikecoolhand/pen/PMOzjZ" target="_blank" rel="noopener noreferrer" className="button-dark">
                           <i className="fab fa-github"></i>CodePen
                       </a>
                   </div>
                   <div className ="item notes">
                       <div className="project-cover">
                       <a href="#!">
                           <img src="images/notes.jpg" alt="notes app"></img>
                       </a>
                       </div>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Notes App
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                   {/* <div className ="item">
                       <a href="#!">
                           * <img src="images/projects/project4.jpg"></img> INSERT PROJECT PICTURE HERE
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div> */}
                   {/* <div className = "item">
                       <a href="#!">
                           <img src="images/projects/project5.jpg"></img> INSERT PROJECT PICTURE HERE
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div> */}
                </div>
            {/* <footer id="work-footer">
                Copyright &copy; 2020
            </footer> */}
            </main>
        </div>
    )
}

export default Work