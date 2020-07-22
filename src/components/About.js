import React from 'react'

function About() {
    return(
        <div>
            <header>
                <div className="menu-button">
                    <div className="button-line"></div>
                    <div className="button-line"></div>
                    <div className="button-line"></div>
                </div>
                <nav className="menu">
                    <ul className="menu-navigation">
                        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item current"><a href="/" className="nav-link">About Me</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">My Work</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Reach Me</a></li>
                    </ul>
                </nav>
            </header>
            <main id="about">
                <h1 className="lg-heading">About<span className="text-secondary">Me</span></h1>
                <h2 className="sm-heading">Who am I?</h2>
                <div className="about-info">
                    <img src="/img/new_website_avi.jpg" alt="Luke Flint" className="bio-image"></img>
                    <div class="bio">
                        <h3 className="text-secondry">BIO</h3>
                        <p> Bats frighten me. It's time my enemies shared my dread. The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.</p>
                    </div>
                    <div className="job job-1">
                        <h3>123 Workshop</h3>
                        <h6>Developer</h6>
                        <p> Bats frighten me. It's time my enemies shared my dread. Does it come in black?</p>
                    </div>
                    <div className="job job-2">
                        <h3>Designers ABC</h3>
                        <h6>Front End Developer</h6>
                        <p> Bats frighten me. It's time my enemies shared my dread. Does it come in black?</p>
                    </div>
                    <div className="job job-3">
                        <h3>123 Workshop</h3>
                        <h6>Graphic Designer</h6>
                        <p> Bats frighten me. It's time my enemies shared my dread. Does it come in black?</p>
                    </div>
                </div>
            </main>
            <footer id="about-footer">
                Copyright &copy; 2020
            </footer>
        </div>

    )
}

export default About 