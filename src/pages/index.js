import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"

export default () => (
  <Layout>
    <div id="about">
      <h2 style={{ textTransform: "uppercase" }}>
        About Me
      </h2>
      <p>
        Hi! My name is Dalton Craven. I’m in 12th grade at Mason High School. Freshman year, I decided to take a programming class. That decision helped cement my love for computers and technology, impacting how I spend the majority of my time.
      </p>
      <p>
        Currently, I’m the Webmaster and Finance Director for Mason Hack Club. As part of Hack Club, I’ve run numerous computer programming events. The biggest event I ran was CincyHacks, Cincinnati’s first high school hackathon. With over 60 participants, the event was a roaring success. Additionally, I helped run Mason Hack Camp, a programming workshop for 5th to 8th graders. I also help manage the day-to-day aspects of the club, helping students work on various projects collaboratively.
      </p>
      <p>
        I’m also the webmaster and Server Admin for Mason High School’s sites. Including masoncomets.org, gomasoncomets.com, masondrama.com, and various other sites, we have an estimated reach of 1,000,000 views per year. I recently transferred all web data over to a completely new server, with no downtime. I’m additionally leading a team that creates various graphics for a site. Finally, I’m creating a brand-new, modern website that will be the face of Mason High School for years to come.
      </p>
    </div>
    <div id="work">
      <h2 style={{ textTransform: "uppercase" }}>
        My Projects
      </h2>
      <div className="row" style={{ marginBottom: 30 }}>
        <Project
          name="Project Name"
          description="Project description" />
        <Project
          name="Project Name"
          description="Project description" />
      </div>
      <div className="row" style={{ marginBottom: 30 }}>
        <Project
          name="Project Name"
          description="Project description" />
        <Project
          name="Project Name"
          description="Project description" />
      </div>
    </div>
    <div id="contact">
      <h2 style={{ textTransform: "uppercase" }}>
        Contact Me
      </h2>
      <ul>
        <li>
          <a href="mailto:daltonjcraven@gmail.com">Email</a>
        </li>
        <li>
          <a href="tel:5138136421">Phone</a>
        </li>
        <li>
          <a href="https://github.com/cravend">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dalton-craven/">LinkedIn</a>
        </li>
      </ul>
    </div>
    <hr />
    <div id="footer">
      <p style={{ float: "left"}}>
        &copy; 2018 Dalton Craven
      </p>
      <p style={{ float: "right"}}>
        <a href="https://github.com/cravend/site">
          View source on GitHub
        </a>
      </p>
    </div>
  </Layout>
)
