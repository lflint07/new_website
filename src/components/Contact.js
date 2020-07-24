import React from 'react';

function Contact() {
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
                        <li className="nav-item"><a href="/" className="nav-link">About Me</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">My Work</a></li>
                        <li className="nav-item current"><a href="/" className="nav-link">Reach Me</a></li>
                    </ul>
                </nav>
            </header>
            <main id="contact">
                <h1 className="lg-heading">Contact<span className="text-secondary"> Me</span></h1>
                <h2 className="sm-heading">Speak to me</h2>
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email:</span> lflint07@gmail.com
                    </div>
                    <div>
                        <span className="text-secondary">LinkedIn</span> LinkedIn here
                    </div>
                    <div>
                        <span className="text-secondary">Github</span> Github here
                    </div>
                </div>
            </main>
            <footer id="about-footer">
                Copyright &copy; 2020
            </footer>
        </div>
    )
}

export default Contact