import React from "react";

function Experience() {
  return (
    <div>
      <div id="experience">
        <h1 className="lg-heading experience">
          My<span className="text-secondary"> Experience</span>
        </h1>
        <div className="job-experience">
          <div className="job job-1">
            <h3>Software Analyst</h3>
            <h5>Research and Development / 2ULaundry Inc.</h5>
            <h6>Mar 2019 - Mar 2020</h6>
            <div>
              <ul>
                <li>
                  Executive team recognized desire to move into technology, thus
                  resulting in a promotion which focused on cross-departmental
                  company projects.
                </li>
                <li>
                  Launched the third location through project managing research
                  & development dependencies using Agile methodology and quality
                  assurance.
                </li>
                <li>
                  Maintained near 100% uptime of the legacy system. Identified
                  and remediated cross-departmental software issues,
                  guaranteeing digital operations remained uninterrupted.
                </li>
                <li>
                  Oversaw ad hoc projects utilizing data aggregation, reduced
                  operational risk with internal company hardware.
                </li>
                <li>
                  Utilized MySQL WorkBench and Django Python web framework to
                  aggregate critical data for reporting teams.
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
