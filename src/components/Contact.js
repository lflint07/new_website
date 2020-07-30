import React from 'react';

function Contact() {
    return(
        <div>
            <div id="contact">
                <h1 className="lg-heading">Contact<span className="text-secondary"> Me</span></h1>
                {/* <h2 className="sm-heading">Speak to me</h2> */}
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email:</span> lflint07@gmail.com
                    </div>
                    <div>
                        <span className="text-secondary">Phone:</span> (540) 292-0965
                    </div>
                {/* For Responsive Contact */}
                    {/* <div>
                        <span className="text-secondary">LinkedIn</span> LinkedIn here
                    </div>
                    <div>
                        <span className="text-secondary">Github</span>
                    </div> */}
                </div>
            </div>
            <footer id="about-footer">
                Copyright &copy; 2020
            </footer>
        </div>
    )
}

export default Contact