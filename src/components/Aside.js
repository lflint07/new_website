import React from 'react'

function Aside() {
    return (
            <aside id="aside">
                <div className="text-center">
                    <div className="author-img"></div>
                    <h1 id="logo"><a href="index.html">Luke Flint</a></h1>
                    <span className="position">Business Creative / Developer in Charlotte, NC</span>
                </div>
                {/* <nav id="main-menu" role="navigation" className="navbar">
                    <div id="navbar" class="collapse">
                        <ul>
                            <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                            <li>About</li>
                            <li><a href="#" data-nav-section="counter">Counter</a></li>
                            <li><a href="#" data-nav-section="skills">Skills</a></li>
                            <li><a href="#" data-nav-section="education">Education</a></li>
                            <li><a href="#" data-nav-section="experience">Experience</a></li>
                            <li><a href="#" data-nav-section="work">Work</a></li>
                            <li><a href="#" data-nav-section="blog">Blog</a></li>
                            <li><a href="#" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav> */}
                <div className="nav-footer">
                    <p><small>
                    Copyright &copy; 2020. All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i>
                    by Colorlib
                    </small></p>
                </div>
            </aside>
    )
        
}

export default Aside