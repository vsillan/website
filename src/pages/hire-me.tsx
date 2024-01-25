import * as React from "react"
import Layout from "../components/Layout"
import { css } from "@emotion/css"
import { ContactForm } from "../components/ContactForm"
import { Chip } from "../components/Chip"

type Props = {
  location: Location
}

const techSkills = [
  "Azure",
  "AWS",
  "Terraform",
  "React",
  "Vue.js",
  "Node.js",
  "Typescript",
  "C#",
  "Python",
  "Scala",
  "SQL databases",
  "MongoDB",
  "Redis",
  "Docker",
  "Unity",
  "React native",
]

const HireMe: React.FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <h2>What do I do?</h2>
      <p>
        I'm all about efficiently delivering software projects. I can take on
        different roles - team lead, software developer, cloud engineer or
        solution architect. When it comes to development, I can handle
        everything from the front-end to the back-end and cloud, using various
        tech stacks. What I really enjoy is diving into the business side of the
        project I'm working on and combining business and tech know-how to find
        the best solutions.
      </p>
      <p>
        I've had the opportunity to work with diverse clients across various
        industries, taking on various and sometimes challenging domains. My
        project journey has encompassed everything from shorter architecture
        roles to multi-year projects, allowing me to engage in every phase of
        the software development cycle.
      </p>
      <h2>Tech skills</h2>
      <div
        className={css`
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        `}
      >
        {techSkills.map(skill => (
          <Chip text={skill} />
        ))}
      </div>
      <h2>Send me a message</h2>
      <ContactForm />
    </Layout>
  )
}

export default HireMe
