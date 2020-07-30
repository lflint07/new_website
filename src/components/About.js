import React from "react";

function About() {
  return (
    <div>
      <div id="about">
        <h1 className="lg-heading about">
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
              graduated from Virginia Tech with a business degree in hospitality
              during one of the largest economic downturns in modern history.
              Despite this, I began finding opportunities wherever they
              presented themselves by working various odd jobs. This helped me
              gain insightful experience and a plethora of applicable skills in
              several industries before eventually deciding to move to
              Charlotte.
            </p>
            <p>
              I’m all about going where the opportunity is, and Charlotte is a
              hub for talented minds. After establishing myself here, I found my
              next opportunity in completing the full-stack web development
              bootcamp with Tech Talent South. From there, I worked in a series
              of creatieve roles for local startup before finding my way to
              2ULaundry, a local pickup and delivery laundry startup.
            </p>
            <p>
              2ULaundry was a bit of a Cinderella Story for me as I started as a
              delivery driver but quickly moved up in the ranks. They ended up
              creating two separate positions for me within the Customer Care
              Team, Tier II Analyst and Senior Business Analyst, respectively. I
              worked with that team to develop and implement processes to
              enhance overall employee and customer experience. I then joined
              the Research and Development team, where I maintained internal
              systems, managed projects, and aggregated data for reporting.
            </p>
            <p>
              Due to COVID-19, however, the company downsized and I was laid off and I’ve
              definitely come full circle. Now, I’m looking to utilize my skills
              with a technology-forward company as a web developer, designer or
              project manager while building customer-centric, front-end
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


