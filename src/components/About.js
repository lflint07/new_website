import React from "react";

function About() {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About<span className="text-secondary"> Me</span>
        </h1>
        <div className="about-info">
          <img
            src="/images/new_website_avi.jpg"
            alt="Luke Flint"
            className="bio-image"
          ></img>
          <div class="bio">
            {/* <h3 className="text-secondry">Who am I?</h3> */}
            <p>
              These sections are always so tough for me to write because I want
              to include relevant information about myself but I also don't want
              to wax poetic. I would classify myself as a life-long learner with
              a wide array of interests. I am an avid reader and the list of my
              'hobbies' include nutrition and fitness, creating art (of which
              I've highlighted in this portfolio), cinematography, and sneakers.
              I'm a graduate of Virginia Polytechnic Institute and State
              University, otherwise known as Virginia Tech, and I currently
              reside in Charlotte, North Carolina.
            </p>
          </div>
          <div className="job job-1">
            <h3>Software Analyst</h3>
            <h5>Research and Development / 2ULaundry Inc.</h5>
            <div>
              <ul>
                <li>
                  Managed Research and Development dependencies using
                  traditional Agile methodologies while quality assurance
                  testing across internal platforms for cross-departmental
                  synchronization prior to the launch of a third operating
                  service location.
                </li>
                <li>
                  Responsible for maintaining near 100% uptime of legacy systems
                  by managing daily internal irregularities including cross
                  departmental software issues.
                </li>
                <li>
                  Acted as process owner for credential generation and employee
                  onboarding{" "}
                </li>
                <li>
                  Tasked with overseeing projects utilizing data aggregation,
                  reducing operational risk with regards to internal company
                  hardware, and managing sitewide information for a subsidiary.
                </li>
              </ul>
            </div>
          </div>
          <div className="job job-2">
            <h3>Senior Business Analyst</h3>
            <h5>Customer Care / 2ULaundry Inc.</h5>
            <div>
              <ul>
                <li>
                  Trained and mentored other analysts by tracking development
                  and utilizing one-on-one meetings to establish accountability
                  and setting goals.
                </li>
                <li>
                  Integral in reducing reputational risk and upholding quality
                  control by managing daily internal and external discrepancies
                  and coordinating with multiple departments to ensure the
                  completion of daily completions.
                </li>
              </ul>
            </div>
          </div>
          <div className="job job-3">
            <h3>Tier II Analyst</h3>
            <h5>Customer Care / 2ULaundry Inc.</h5>
            <div>
              <ul>
                <li>
                  Improved quality control by standardizing processes across
                  multiple channels and departments while (also?) establishing
                  the escalation point-of-contact position within the Customer
                  Care Department to better facilitate the customer experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* <footer id="about-footer">
                Copyright &copy; 2020
            </footer> */}
    </div>
  );
}

export default About;
//This is for later use //
{
  /* <header>
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
      </header> */
}
