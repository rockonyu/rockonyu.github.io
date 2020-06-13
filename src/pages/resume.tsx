import React from "react"
import { Main, Footer, resume } from "../components/resume"
import { Layout, SEO } from "../components"
import "../components/layout.css"

const Resume = () => (
  <>
    <Layout title={resume.basics.name}>
      <SEO
        title={resume.basics.title}
        description={resume.basics.description}
      />
      <Main
        description={resume.basics.description}
        skills={resume.skills}
        milestone={resume.milestone}
      />
    </Layout>
    <Footer
      name={resume.basics.name}
      enname={resume.basics.enname}
      email={resume.basics.email}
      linkedin={resume.basics.linkedin}
    />
  </>
)

export default Resume
