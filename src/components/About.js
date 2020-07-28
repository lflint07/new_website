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
              My career has definitely taken an untraditional trajectory. I
              graduated from Virginia Tech with a Hospitality degree during one
              of the largest economic downturns in modern history. Despite this,
              I began finding opportunities wherever they presented themselves
              by working various odd jobs. This helped me gain insightful
              experience and a plethora of applicable skills in several
              industries before eventually deciding to move to Charlotte.
            </p>
            <p>
              I’m all about going where the opportunity is, and Charlotte is a
              hub for talented minds. After establishing myself here, I found my
              next opportunity in completing the full-stack web development
              bootcamp with Tech Talent South. From there, I worked in a series
              of creatieve roles for local startups, then I found my way to
              2ULaundry – a local pickup and delivery laundry startup.
            </p>
            <p>
              2ULaundry was a bit of a Cinderella Story for me – I started as a
              delivery driver but quickly moved high up in the ranks. They ended
              up creating two separate positions for me – Tier II Analyst and
              Senior Business Analyst. I worked with the Customer Care Team to
              develop and implement processes to enhance overall employee and
              customer experience. Then, I joined the Research and Development
              team, where I maintained internal systems, managed projects, and
              aggregated data for reporting.
            </p>
            <p>
              Due to COVID-19, however, my entire team was laid off. I’ve
              definitely come full circle. Now, I’m looking to utilize my skills
              with technology-forward company as a web developer, designer or
              project manager while building customer-centric, front-end
              technology.
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
