import React from "react";

function Experience() {
  return (
    <div>
      <div id="experience">
        <h1 className="lg-heading">
          My<span className="text-secondary"> Experience</span>
        </h1>
        <div className="job-experience">
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
      </div>
    </div>
  );
}

export default Experience;
