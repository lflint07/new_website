import React from 'react'

function Work() {
    return(
        <div>
            <main id="work">
                <h1 className="lg-heading">My<span className="text-secondary"> Work</span></h1>
                <h2 className="sm-heading">Check out a few of my projects</h2>
                <div className="projects">
                   <div className ="item">
                       <a href="#!">
                           {/* <img src="images/projects/project1.jpg"></img> INSERT PROJECT PICTURE HERE*/}
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                   <div className ="item">
                       <a href="#!">
                           {/* <img src="images/projects/project2.jpg"></img> INSERT PROJECT PICTURE HERE*/}
                       </a>
                       <a href="#" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                   <div className ="item">
                       <a href="#!">
                           {/* <img src="images/projects/project3.jpg"></img> INSERT PROJECT PICTURE HERE*/}
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                   <div className ="item">
                       <a href="#!">
                           {/* <img src="images/projects/project4.jpg"></img> INSERT PROJECT PICTURE HERE*/}
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                   <div className = "item">
                       <a href="#!">
                           {/* <img src="images/projects/project5.jpg"></img> INSERT PROJECT PICTURE HERE*/}
                       </a>
                       <a href="#!" className="button-light">
                           <i className="fas fa-eye"></i>Project
                       </a>
                       <a href="#!" className="button-dark">
                           <i className="fab fa-github"></i>Github
                       </a>
                   </div>
                </div>
            </main>
            {/* <footer id="work-footer">
                Copyright &copy; 2020
            </footer> */}
        </div>
    )
}

export default Work