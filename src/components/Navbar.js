import React from 'react';


function Navbar() {
    return (
            <aside id="navbar">
                <div className="nav-header">
                    <div className="author-img">
                        <img src="new_website_avi.jpg" alt="new avatar"></img>
                    </div>
                    <h6 id="logo"><a href="index.html">Luke Flint</a></h6>
                    <div className="position">
                        Business Creative / Developer in Charlotte, NC
                    </div>
                </div>
                <nav className="nav-aside">
                    <div>
                        <ul>
                            <li className="active">Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Experience</li>
                            <li>Work</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </nav>
                <div className="nav-footer">
                </div>
            </aside>
    )
        
}


export default Navbar