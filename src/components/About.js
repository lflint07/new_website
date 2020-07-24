import React from 'react'

function About() {
    return(
        <div>
            {/* <header>
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
            </header> */}
            <main id="about">
                <h1 className="lg-heading">About<span className="text-secondary"> Me</span></h1>
                {/* <h2 className="sm-heading">Who am I?</h2> */}
                <div className="about-info">
                    <img src="/images/new_website_avi.jpg" alt="Luke Flint" className="bio-image"></img>
                    <div class="bio">
                        <h3 className="text-secondry">Who am I?</h3>
                        <p>These sections are always so tough for me to write because I want to include relevant information about myself but I also don't want to wax poetic.

I would classify myself as a life-long learner with a wide array of interests. I am an avid reader and the list of my 'hobbies' include nutrition and fitness, creating art (of which I've highlighted in this portfolio), cinematography, and sneakers.

I'm a graduate of Virginia Polytechnic Institute and State University, otherwise known as Virginia Tech, and I currently reside in Charlotte, North Carolina.

</p>
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
            {/* <footer id="about-footer">
                Copyright &copy; 2020
            </footer> */}
        </div>

    )
}

export default About 